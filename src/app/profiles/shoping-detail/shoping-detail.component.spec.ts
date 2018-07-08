import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingDetailComponent } from './shoping-detail.component';

describe('ShopingDetailComponent', () => {
  let component: ShopingDetailComponent;
  let fixture: ComponentFixture<ShopingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
