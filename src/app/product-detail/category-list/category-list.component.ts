import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ProductDetailService } from "../product-detail.service";
import { BreakingPointsService } from '@core/breaking-points/breaking-points.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  private query;
  public products;
  public isHandset;

  constructor(private route: ActivatedRoute, private breaking: BreakingPointsService, private productService: ProductDetailService) { }

  ngOnInit() {
    this.isHandset = this.breaking.isHandset;
    this.query = this.route.snapshot.paramMap.get('id');
    this.products = this.productService.category(this.query);
  }

}
