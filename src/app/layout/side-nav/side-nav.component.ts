import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material';

import { BreakingPointsService } from '@core/breaking-points/breaking-points.service';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  public categories: Array<Category>;
  public isHandset$;

  constructor(
    private sideNavService: SideNavService,
    private breakingPoints: BreakingPointsService
  ) {
    this.categories = [{ name: 'Naranjas' }, { name: 'Manzanas' }];
    this.isHandset$ = this.breakingPoints.isHandset;
  }

  ngOnInit() {
    this.sideNavService.setSidenav(this.sidenav);
  }
}

interface Category {
  name: string;
}
