import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-prod-desc',
  templateUrl: './prod-desc.component.html',
  styleUrls: ['./prod-desc.component.css']
})
export class ProdDescComponent implements OnInit {
  public Producto: string;
  public NombreProveedor: string;
  public fechaPlantacion: Date;
  public fechaCosecha: Date;
  public cantidad: number;
  public medida: string;
  prodDescriptionForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.Producto = 'Hola';
    this.NombreProveedor = 'hasdf';
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  ngOnInit() {
    this.prodDescriptionForm = this.fb.group({
      cantidadAComprar: '0'
    });
  }
}
