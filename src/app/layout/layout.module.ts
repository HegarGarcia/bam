import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Modules
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule
} from '@angular/material';

import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { SideNavService } from './side-nav.service';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule
  ],
  exports: [NavComponent],
  providers: [SideNavService],
  declarations: [NavComponent, SideNavComponent, ToolbarComponent]
})
export class LayoutModule {}
