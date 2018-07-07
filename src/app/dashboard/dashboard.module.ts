import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { OfferComponent } from './offer/offer.component'

import { LandingComponent } from './landing/landing.component';
import { ProductsFeedService } from './products-feed.service';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    ProductsFeedService
  ],
  exports: [LandingComponent],
  declarations: [LandingComponent, OfferComponent]
})

export class DashboardModule {}
