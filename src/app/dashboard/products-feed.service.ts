import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { IProduct } from '@interfaces/product';

@Injectable()
export class ProductsFeedService {
  public sellersRef: Observable<any>;
  private products;

  constructor(private afs: AngularFirestore) {}

  getNewest(): Observable<any> {
    return this.afs
      .collection<IProduct>('productos', ref => ref.limit(5))
      .valueChanges();
  }

  getBest() {
    return this.afs
      .collection<IProduct>('productos', ref => ref.limit(5))
      .valueChanges();
  }

  getVerifed() {
    return this.afs.collection<IProduct>('productos', ref => ref.where('verified', '==', true)).valueChanges();
  }
}
