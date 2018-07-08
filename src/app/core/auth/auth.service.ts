import { Injectable } from '@angular/core';

import { IProfile } from '../../interfaces/profiles';

import { auth } from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore
  ) {
    this.user = this.afAuth.authState;
  }

  googleLogin(): Promise<any> {
    const provider = new auth.GoogleAuthProvider();
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(credentials => {
        const user: IProfile = {
          uid: credentials.user.uid,
          name: credentials.user.displayName,
          photoURL: credentials.user.photoURL,
          email: credentials.user.email
        };
        this.afs.doc(`users/${user.uid}`).set(user);
        this.user = of(credentials.user);
        return this.user;
      })
      .catch(err => console.error(err));
  }

  withPasswordAndEmail(email: string, password: string) {}

  signOut() {
    this.afAuth.auth.signOut().then(() => (this.user = null));
  }
}
