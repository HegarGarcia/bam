import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDescComponent } from './prod-desc.component';
import { ProdBuyComponent } from '../prod-buy/prod-buy.component';
describe('ProdDescComponent', () => {
  let component: ProdDescComponent;
  let fixture: ComponentFixture<ProdDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdDescComponent, ProdBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
