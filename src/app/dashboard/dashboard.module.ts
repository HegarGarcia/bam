import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';

import {MatCardModule} from '@angular/material/card'
@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [LandingComponent],
  declarations: [LandingComponent]
})
export class DashboardModule { }
