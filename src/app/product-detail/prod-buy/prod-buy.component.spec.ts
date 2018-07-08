import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBuyComponent } from './prod-buy.component';
import {MatSelectModule} from '@angular/material/select';


describe('ProdBuyComponent', () => {
  let component: ProdBuyComponent;
  let fixture: ComponentFixture<ProdBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdBuyComponent, MatSelectModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
