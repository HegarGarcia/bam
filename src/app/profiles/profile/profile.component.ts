import { Component, Inject, Input } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ProfileService } from '../profile.service';

export interface DialogData {
  uid: any;
  name: any;
  photoURL: any;
  email: any;
  address?: any;
  phone?: any;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() private uid: string;
  constructor(public dialog: MatDialog, private profile: ProfileService) {}

  openDialog() {
    const data = this.profile.getProfile(this.uid);
    this.dialog.open(ProfileDialogComponent, {
      width: '80%',
      height: '80%',
      data
    });
  }
}

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile.dialog.html',
  styleUrls: ['./profile.dialog.css']
})
export class ProfileDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
