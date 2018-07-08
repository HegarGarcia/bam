import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BreakingPointsService } from '@core/breaking-points/breaking-points.service';

import { ActivatedRoute } from '@angular/router';

import { ProductDetailService } from '../product-detail.service';
import { Observable } from 'rxjs';
import { IProduct } from '@interfaces/product';
import { IProfile } from '@interfaces/profiles';
import { AuthService } from '@core/auth/auth.service';


@Component({
  selector: 'app-prod-desc',
  templateUrl: './prod-desc.component.html',
  styleUrls: ['./prod-desc.component.css']
})
export class ProdDescComponent implements OnInit {

public prodDescriptionForm: FormGroup;
  public product: Observable<IProduct>;
  public user: Observable<IProfile>;

  constructor(
    private fb: FormBuilder,
    private productDetail: ProductDetailService,
    private route: ActivatedRoute,
    public auth: AuthService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.productDetail.getProduct(id);

    this.product.subscribe(
      data => (this.user = this.productDetail.getUser(data.propietario))
    );

    this.prodDescriptionForm = this.fb.group({
      cantidadAComprar: '0'
    });
  }
}
