import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import {
  MatDialogModule,
  MatButtonModule,
  MatCardModule,
  MatTabsModule,
  MatListModule,
  MatIconModule
} from '@angular/material';

import {
  ProfileComponent,
  ProfileDialogComponent
} from './profile/profile.component';
import {
  OtherProfileComponent,
  OtherProfileDialogComponent
} from './other-profile/other-profile.component';

import { ProfileService } from './profile.service';
import { TabsComponent } from './tabs/tabs.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ShopingDetailComponent } from './shoping-detail/shoping-detail.component';
import { SalesDetailComponent } from './sales-detail/sales-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    ProfileComponent,
    ProfileDialogComponent,
    OtherProfileComponent,
    OtherProfileDialogComponent
  ],
  entryComponents: [ProfileDialogComponent, OtherProfileDialogComponent],
  declarations: [
    ProfileComponent,
    ProfileDialogComponent,
    OtherProfileComponent,
    OtherProfileDialogComponent,
    TabsComponent,
    ProfileDetailComponent,
    ShopingDetailComponent,
    SalesDetailComponent
  ],
  providers: [ProfileService]
})
export class ProfilesModule {}
