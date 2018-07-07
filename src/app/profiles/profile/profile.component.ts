import { Component, Inject } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

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
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ProfileComponentDialog, {
      width: '80%',
      height: '80%',
      data: { animal: 'hola' }
    });
  }
}

@Component({
  selector: 'profile-dialog',
  templateUrl: './profile.dialog.html',
  styleUrls: ['./profile.dialog.css']
})
export class ProfileComponentDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
