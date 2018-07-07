import { Injectable } from "@angular/core";

import { ProductsModule } from "./products.module";

@Injectable({
  providedIn: ProductsModule
})
export class ProductService {
  constructor() {}
}
