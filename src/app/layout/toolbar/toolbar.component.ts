import { Component, OnInit } from '@angular/core';

import { SideNavService } from '../side-nav.service';
import { AuthService } from '@core/auth/auth.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public user: Observable<firebase.User>;

  constructor(
    public sideNavService: SideNavService,
    public authService: AuthService
  ) {
    this.user = authService.user;
  }

  ngOnInit() {}
}
