import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { BreakingPointsService } from '@core/breaking-points/breaking-points.service';

export interface Units {
  value: string;
  viewValue: string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myForm: FormGroup;
  isHandset;
  constructor(public breaking: BreakingPointsService) {
    this.isHandset = this.breaking.isHandset;
  }

  ngOnInit(){}
}

@Component({
  selector: 'app-form-select',
  templateUrl: './form.select.html',
  styleUrls: ['./form.select.css'],
})
export class FormSelectComponent {
  units: Units[] = [
    {value: 'kg', viewValue: 'Kilos'},
    {value: 'ton', viewValue: 'Toneladas'},
  ];
}