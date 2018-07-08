import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatDialogModule,
  MatButtonModule,
  MatCardModule,
  MatTabsModule
} from '@angular/material';

import {
  ProfileComponent,
  ProfileDialogComponent
} from './profile/profile.component';
import { OtherProfileComponent } from './other-profile/other-profile.component';

import { ProfileService } from './profile.service';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule
  ],
  exports: [ProfileComponent, ProfileDialogComponent],
  entryComponents: [ProfileDialogComponent],
  declarations: [
    ProfileComponent,
    ProfileDialogComponent,
    OtherProfileComponent
  ],
  providers: [ProfileService]
})
export class ProfilesModule { }
