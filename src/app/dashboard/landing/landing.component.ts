import { Component } from '@angular/core';

import { ProductsFeedService } from '../products-feed.service';
import { BreakingPointsService } from '@core/breaking-points/breaking-points.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  isHandset;
  newest;
  best;
  verified;

  constructor(
    public breaking: BreakingPointsService,
    public feed: ProductsFeedService
  ) {
    this.isHandset = this.breaking.isHandset;
    this.feed.getNewest().subscribe(raw => (this.newest = raw));
    this.feed.getBest().subscribe(raw => (this.best = raw));
    this.feed.getVerifed().subscribe(raw => (this.verified = raw));
  }
}
