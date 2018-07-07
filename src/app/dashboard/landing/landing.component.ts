import { Component, OnInit } from '@angular/core';

import { ProductsFeedService } from '../products-feed.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  feed$: Observable<any>;

  constructor(private feed: ProductsFeedService) {
    this.feed$ = feed.sellersRef;
  }

  ngOnInit() {}
}
