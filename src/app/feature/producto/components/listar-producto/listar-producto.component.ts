import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PagoService } from '@producto/shared/service/pagoservice';
import { Pago } from '@producto/shared/model/pago';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  public listaProductos: Observable<Pago[]>;

  constructor(protected pagoService: PagoService) { }

  ngOnInit() {
    this.listaProductos = this.pagoService.consultar();
  }

}
