import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PagoService } from '../../shared/service/pagoservice';
import { Pago } from '../../shared/model/pago';

@Component({
  selector: 'app-listar-pago',
  templateUrl: './listar-pago.component.html',
  styleUrls: ['./listar-pago.component.css']
})
export class ListarPagoComponent implements OnInit {
  public listaPagos: Observable<Pago[]>;

  constructor(protected pagoService: PagoService) { }

  ngOnInit() {
    this.listaPagos = this.pagoService.consultar();
  }
}
