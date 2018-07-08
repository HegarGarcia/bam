import { Injectable } from '@angular/core';

import { IProfile } from '../../interfaces/profiles';

import { auth } from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<IProfile>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<IProfile>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  googleLogin(): Promise<any> {
    const provider = new auth.GoogleAuthProvider();
    
    return this.afAuth.auth.signInWithPopup(provider).then(credentials => {
      const user: IProfile = {
        uid: credentials.user.uid,
        name: credentials.user.displayName,
        photoURL: credentials.user.photoURL,
        email: credentials.user.email
      };
      this.afs.doc(`users/${user.uid}`).set(user);
      this.user = of(credentials.user);
      return this.user;
    });

  }

  signOut() {
    this.afAuth.auth.signOut().then(() => this.router.navigate(['/']));
  }
}
