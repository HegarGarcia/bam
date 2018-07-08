import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material';

import { AuthService } from "@core/auth/auth.service";
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
    private breakingPoints: BreakingPointsService,
    public auth: AuthService
  ) {
    this.categories = [{ name: 'Frutas' }, { name: 'Verduras' },{name: "Granos"},{name: 'Fertilizantes '}, {name: 'Flores'}, {name:"Plantas o Arboles"}];
    this.isHandset$ = this.breakingPoints.isHandset;
  }

  ngOnInit() {
    this.sideNavService.setSidenav(this.sidenav);
  }
}

interface Category {
  name: string;
}
