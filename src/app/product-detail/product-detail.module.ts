import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdDescComponent } from './prod-desc/prod-desc.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatSliderModule, MatButtonModule, MatGridListModule, MatDividerModule],
  exports: [ProdDescComponent],
  declarations: [ProdDescComponent]
})
export class ProductDetailModule {}
