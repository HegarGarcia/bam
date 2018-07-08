import { Injectable } from '@angular/core';
import { ProfilesModule } from './profiles.module';

import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ProfileService {
  constructor(private afs: AngularFirestore) {}

  getProfile(userId) {
    return this.afs.doc(`users/${userId}`).valueChanges();
  }
}
