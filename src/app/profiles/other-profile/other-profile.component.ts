import { Component, Inject, Input } from '@angular/core';
import { BreakingPointsService } from '@core/breaking-points/breaking-points.service';
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
  selector: 'app-other-profile',
  templateUrl: './other-profile.component.html',
  styleUrls: ['./other-profile.component.css']
})

export class OtherProfileComponent {
  @Input() private uid: string;
  @Input() public auth: any;
  constructor(public dialog: MatDialog, private profile: ProfileService, ){
    
  }
  openDialog() {
    const data = this.profile.getProfile(this.uid);
    this.dialog.open(OtherProfileDialogComponent, {
      width: '80%',
      height: '80%',
      data
    });
  }
}

@Component({
  selector: 'app-other-profile-dialog',
  templateUrl: './other-profile.dialog.html',
  styleUrls: ['./other-profile.dialog.css']
})

export class OtherProfileDialogComponent {
  isHandset;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public breaking: BreakingPointsService) {
    this.isHandset = this.breaking.isHandset;
  }
}
