import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ProfileComponent,
  ProfileDialogComponent
} from './profile/profile.component';
import { ProfileService } from './profile.service';

import { MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [ProfileComponent, ProfileDialogComponent],
  entryComponents: [ProfileDialogComponent],
  declarations: [ProfileComponent, ProfileDialogComponent],
  providers: [ProfileService]
})
export class ProfilesModule {}
