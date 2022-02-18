import { NgModule } from '@angular/core';

import { PagoRoutingModule } from './pago-routing.module';
import { BorrarProductoComponent } from './components/borrar-producto/borrar-producto.component';
import { ListarPagoComponent } from './components/listar-pago/listar-pago.component';
import { CrearPagoComponent } from './components/crear-pago/crear-pago.component';
import { PagoComponent } from './components/pago/pago.component';
import { SharedModule } from '@shared/shared.module';
import { PagoService } from './shared/service/pagoservice';


@NgModule({
  declarations: [
    CrearPagoComponent,
    ListarPagoComponent,
    BorrarProductoComponent,
    PagoComponent
  ],
  imports: [
    PagoRoutingModule,
    SharedModule
  ],
  providers: [PagoService]
})
export class PagoModule { }
