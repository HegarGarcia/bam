import { Component, Inject, Input } from '@angular/core';
import { BreakingPointsService } from '@core/breaking-points/breaking-points.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

import { AuthService } from '@core/auth/auth.service';

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
  @Input() public auth: any;
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
  isHandset;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public breaking: BreakingPointsService,
    public dialogRef: MatDialogRef<ProfileDialogComponent>,
    private route: Router,
    public auth: AuthService
  ) {
    this.isHandset = this.breaking.isHandset;
  }

  closeDialog() {
    this.route.navigate(['addProduct']);
    this.dialogRef.close('Pizza!');
  }
}
