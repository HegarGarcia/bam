import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreakingPointsService } from '@core/breaking-points/breaking-points.service';

import { AngularFirestore } from 'angularfire2/firestore';

import { AuthService } from '@core/auth/auth.service';

export interface Units {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public productForm: FormGroup;
  isHandset;

  public units: Units[] = [
    { value: 'kg', viewValue: 'Kilos' },
    { value: 'ton', viewValue: 'Toneladas' }
  ];

  public categories: Units[] = [
    { value: 'fruta', viewValue: 'Frutas' },
    { value: 'verdura', viewValue: 'Verduras' },
    { value: 'semillas', viewValue: 'Granos' },
    { value: 'fertilizante', viewValue: 'Fertilizante' },
    { value: 'flores', viewValue: 'Flores' },
    { value: 'plantas', viewValue: 'Plantas o Árboles' }
  ];

  constructor(
    private fb: FormBuilder,
    public breaking: BreakingPointsService,
    private afs: AngularFirestore,
    private auth: AuthService
  ) {
    this.isHandset = this.breaking.isHandset;
  }

  ngOnInit() {
    this.productForm = this.fb.group({
      nombre: ['', [Validators.required]],
      cantidad: [0, [Validators.required, Validators.min(1)]],
      unidades: ['kg', [Validators.required]],
      categoria: ['', [Validators.required]],
      descripcion: ['', []],
      costo: [0, [Validators.required]]
    });
  }

  addProduct() {
    const value = this.productForm.value;
    console.log(this.auth.userValue.uid);
    this.afs
      .collection('productos')
      .add({ ...value, propietario: this.auth.userValue.uid });
    this.productForm.reset();
  }
}
