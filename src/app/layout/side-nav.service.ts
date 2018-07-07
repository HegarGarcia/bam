import { Injectable } from '@angular/core';
import { LayoutModule } from './layout.module';

import { MatSidenav } from '@angular/material';

@Injectable()
export class SideNavService {
  private sidenav: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public toggle() {
    this.sidenav.toggle();
  }
}
