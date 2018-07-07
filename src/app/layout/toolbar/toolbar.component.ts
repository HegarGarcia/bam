import { Component, OnInit } from '@angular/core';

import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor(public sideNavService: SideNavService) {}

  ngOnInit() {}
}
