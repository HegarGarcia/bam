import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsFeedService {
  public sellersRef: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.sellersRef = this.afs.collection('users').valueChanges();
  }
}
