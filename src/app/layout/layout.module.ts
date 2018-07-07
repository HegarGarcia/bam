import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [CommonModule],
  exports: [NavComponent],
  declarations: [NavComponent, SideNavComponent, ToolbarComponent]
})
export class LayoutModule {}
