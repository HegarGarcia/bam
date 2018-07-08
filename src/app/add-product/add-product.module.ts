import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent, FormSelectComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  declarations: [FormComponent, FormSelectComponent]
})
export class AddProductModule {}
