import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdDescComponent } from './prod-desc/prod-desc.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { ProdBuyComponent } from './prod-buy/prod-buy.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatSliderModule, MatButtonModule, MatGridListModule, MatDividerModule, MatSelectModule, MatCheckboxModule],
  exports: [ProdDescComponent],
  declarations: [ProdDescComponent, ProdBuyComponent]
})
export class ProductDetailModule {}
