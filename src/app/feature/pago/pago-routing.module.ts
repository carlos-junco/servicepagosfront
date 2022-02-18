import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPagoComponent } from './components/crear-pago/crear-pago.component';
import { ListarPagoComponent } from './components/listar-pago/listar-pago.component';
import { BorrarProductoComponent } from './components/borrar-producto/borrar-producto.component';
import { PagoComponent } from './components/pago/pago.component';


const routes: Routes = [
  {
    path: '',
    component: PagoComponent,
    children: [
      {
        path: 'crear',
        component: CrearPagoComponent
      },
      {
        path: 'listar',
        component: ListarPagoComponent
      },
      {
        path: 'borrar',
        component: BorrarProductoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagoRoutingModule { }
