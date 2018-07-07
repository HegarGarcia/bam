import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcinfoComponent } from './ccinfo.component';

describe('CcinfoComponent', () => {
  let component: CcinfoComponent;
  let fixture: ComponentFixture<CcinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
