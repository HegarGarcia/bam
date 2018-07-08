import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgAisModule } from 'angular-instantsearch';

import { ProdDescComponent } from './prod-desc/prod-desc.component';
import { ProdBuyComponent } from './prod-buy/prod-buy.component';

import { ProductDetailService } from './product-detail.service';

import {
  MatSliderModule,
  MatButtonModule,
  MatGridListModule,
  MatDividerModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgAisModule,
    MatSliderModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  declarations: [ProdDescComponent, ProdBuyComponent, ProductListComponent],
  providers: [ProductDetailService]
})
export class ProductDetailModule {}
