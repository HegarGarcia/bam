import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-prod-desc',
  templateUrl: './prod-desc.component.html',
  styleUrls: ['./prod-desc.component.css']
})
export class ProdDescComponent implements OnInit {
  public producto: string;
  public nombreProveedor: string;
  public fechaPlantacion: Date;
  public fechaCosecha: Date;
  public cantidad: number;
  public unidad: string;
  public intervalo: number;

  prodDescriptionForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.producto = 'Hola';
    this.nombreProveedor = 'hasdf';

    if (this.unidad === 'kilogramo') {
      this.intervalo = 10;
    } else if (this.unidad === 'tonelada') {
      this.intervalo = 1;
    }
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
