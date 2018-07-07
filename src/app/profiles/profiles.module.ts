import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileComponentDialog } from "./profile/profile.component";

import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    ProfileComponent, 
    ProfileComponentDialog
  ],
  declarations: []
})
export class ProfilesModule { }
