import { Component, OnInit } from '@angular/core';

import { ProductDetailService } from './../product-detail.service';
import { BreakingPointsService } from '@core/breaking-points/breaking-points.service';

import { environment } from '@env/environment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: any;
  private query: string;
  public isHandset;

  public searchConfig = {
    ...environment.algolia,
    indexName: 'products'
  };

  public showResults = false;

  constructor(
    private breaking: BreakingPointsService,
    private productService: ProductDetailService
  ) {}

  ngOnInit() {
    this.isHandset = this.breaking.isHandset;
  }

  searchChanged(query) {
    if (query.lenth) {
      this.showResults = true;
    } else {
      this.showResults = false;
    }
  }
}
