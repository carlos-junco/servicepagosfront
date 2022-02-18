import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  resul: boolean = true;
  message: string  = 'Por favor, escoja una opción';

  constructor() { }

  ngOnInit() {
  }

}
