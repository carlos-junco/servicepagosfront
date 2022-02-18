import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Pago } from '../model/pago';


@Injectable()
export class PagoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Pago[]>(`${environment.endpoint}/tiposFamilia`, this.http.optsName('consultar pago'));
  }

  public guardar(pago: Pago) {
    return this.http.doPost<Pago, boolean>(`${environment.endpoint}/pago`, pago,
                                                this.http.optsName('crear/actualizar pago'));
  }

  public eliminar(pago: Pago) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/pago/${pago.id}`,
                                                 this.http.optsName('eliminar pago'));
  }
}
