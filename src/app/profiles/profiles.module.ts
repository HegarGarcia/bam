import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent, ProfileComponentDialog } from './profile/profile.component';

import { MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [ProfileComponent, ProfileComponentDialog],
  entryComponents: [ProfileComponentDialog],
  declarations: [ProfileComponent, ProfileComponentDialog]
})
export class ProfilesModule {}
