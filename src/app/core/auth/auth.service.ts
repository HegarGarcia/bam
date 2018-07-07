import { Injectable } from '@angular/core';

import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = this.afAuth.authState;
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    this.afAuth.auth
      .signInWithPopup(provider)
      .then(credentials => (this.user = of(credentials.user)))
      .catch(err => console.error(err));
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => (this.user = null));
  }
}
