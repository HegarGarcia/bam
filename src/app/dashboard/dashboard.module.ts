import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { LandingComponent } from './landing/landing.component';
import { ProductsFeedService } from './products-feed.service';

@NgModule({
  imports: [CommonModule, MatCardModule],
  exports: [LandingComponent],
  providers: [ProductsFeedService],
  declarations: [LandingComponent]
})
export class DashboardModule {}
