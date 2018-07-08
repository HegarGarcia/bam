import { Component } from '@angular/core';
import { BreakingPointsService } from '@core/breaking-points/breaking-points.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent  {
  isHandset;
  constructor(public breaking: BreakingPointsService) { 
    this.isHandset = this.breaking.isHandset;
  }
}
