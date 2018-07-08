import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';

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
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgAisModule,
    SharedModule,

    MatSliderModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  declarations: [ProdDescComponent, ProdBuyComponent, ProductListComponent, CategoryListComponent],
  providers: [ProductDetailService]

})
export class ProductDetailModule {}
