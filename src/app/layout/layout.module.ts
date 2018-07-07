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
import { ProfilesModule } from "..//profiles/profiles.module";
import { SideNavService } from './side-nav.service';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    ProfilesModule,
    MatInputModule
  ],
  exports: [NavComponent],
  providers: [SideNavService],
  declarations: [NavComponent, SideNavComponent, ToolbarComponent, SearchbarComponent]
})
export class LayoutModule {}
