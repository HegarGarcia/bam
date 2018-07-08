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
  feed$: Observable<any>;
  isHandset;

  constructor(public breaking: BreakingPointsService, private feed: ProductsFeedService) {
    this.feed$ = feed.sellersRef;
    this.isHandset = this.breaking.isHandset;
  }
}
