import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '@interfaces/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: IProduct;

  constructor() {}

  ngOnInit() {}
}
