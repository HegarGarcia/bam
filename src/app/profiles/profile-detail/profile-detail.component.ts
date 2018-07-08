import { Component, OnInit } from '@angular/core';

import { AuthService } from "@core/auth/auth.service";

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
