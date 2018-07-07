import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  public categories: [Category];

  constructor(private sideNavService: SideNavService) {
    this.categories = [{ name: 'Naranjas' }];
  }

  ngOnInit() {
    this.sideNavService.setSidenav(this.sidenav);
  }
}

interface Category {
  name: string;
}
