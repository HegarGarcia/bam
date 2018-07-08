import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { IProfile } from '../../interfaces/profiles';

import { auth } from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<IProfile>;
  private userDetail: IProfile = null;
  private auth;

  constructor(
    private afAuth: AngularFireAuth,
    private location: Location,
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

    this.user.subscribe(user => this.userDetail = user)
  }

  googleLogin(): Promise<any> {
    const provider = new auth.GoogleAuthProvider();

    return this.afAuth.auth.signInWithPopup(provider).then(credentials => {
      const user: IProfile = {
        uid: credentials.user.uid,
        name: credentials.user.displayName,
        photoURL: credentials.user.photoURL,
        email: credentials.user.email,
        seller: false
      };
      this.afs.doc(`users/${user.uid}`).set(user, { merge: true });
      return this.location.back();
    });
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  get userValue() {
    return this.userDetail;
  }
}
