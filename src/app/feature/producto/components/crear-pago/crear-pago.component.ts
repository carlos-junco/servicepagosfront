import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../shared/service/pagoservice';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-pago.component.html',
  styleUrls: ['./crear-pago.component.css']
})
export class CrearPagoComponent implements OnInit {
  pagoForm: FormGroup;
  constructor(protected pagoServices: PagoService) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  cerar() {
    this.pagoServices.guardar(this.pagoForm.value);
  }

  private construirFormularioProducto() {
    this.pagoForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    });
  }

}
