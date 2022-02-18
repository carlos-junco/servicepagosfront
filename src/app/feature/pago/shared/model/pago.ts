

export class Pago {

  id: number;
  referenciaPago: string;
  aplicaDescuento: boolean;
  valorBase: number;
  valorTotal: number;
  fechaRegistro: Date;
  fechaProximoPago: Date;

    constructor(id: number, referenciaPago: string, aplicaDescuento: boolean, valorBase: number, fechaRegistro: Date) {
        this.id = id;
        this.referenciaPago = referenciaPago;
        this.aplicaDescuento = aplicaDescuento;
        this.valorBase = valorBase;
        this.fechaRegistro = fechaRegistro;
    }

}
