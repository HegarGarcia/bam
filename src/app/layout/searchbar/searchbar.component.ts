import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  public value: string;
  constructor(private router: Router) {}

  navegate() {
    this.router.navigate(['query', this.value]);
  }
}
