import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  public categories: [Category];

  constructor() {
    this.categories = [{ name: 'Naranjas' }];
  }

  ngOnInit() {}
}

interface Category {
  name: string;
}
