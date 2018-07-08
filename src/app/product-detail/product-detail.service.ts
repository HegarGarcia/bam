import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { IProduct } from '@interfaces/product';
import { Observable } from 'rxjs';
import { IProfile } from '@interfaces/profiles';

@Injectable()
export class ProductDetailService {
  constructor(private afs: AngularFirestore) {}

  getProduct(id): Observable<IProduct> {
    return this.afs.doc<IProduct>(`productos/${id}`).valueChanges();
  }

  getUser(id): Observable<IProfile> {
    return this.afs.doc<IProfile>(`users/${id}`).valueChanges();
  }
}
