import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CcinfoComponent } from './ccinfo/ccinfo.component';

import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  declarations: [CcinfoComponent]
})
export class PaymentModule { }
