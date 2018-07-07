import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from "@shared/shared.module";

import { MatCardModule } from '@angular/material/card';
import { OfferComponent } from './offer/offer.component'

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
  ],
  exports: [LandingComponent],
  declarations: [LandingComponent, OfferComponent]
})
export class DashboardModule { }
