import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-base';


  // se usa con el property binding [item]='options'
  public options: MenuItem[] = [
    { url: '/home', nombre: 'home' },
    { url: '/pago', nombre: 'pago' }

  ];

}
