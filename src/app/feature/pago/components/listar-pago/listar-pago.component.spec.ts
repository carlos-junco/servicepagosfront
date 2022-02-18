import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarPagoComponent } from './listar-pago.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PagoService } from '@producto/shared/service/pagoservice';
import { Pago } from '@producto/shared/model/pago';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarProductoComponent', () => {
  let component: ListarPagoComponent;
  let fixture: ComponentFixture<ListarPagoComponent>;
  let productoService: PagoService;
  const listaPagos: Pago[] = [ new Pago(1, '1111', true, 1000000, new Date('2022-02-16')), new Pago(2, '2222', false, 1000000, new Date('2022-02-16'))];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPagoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [PagoService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPagoComponent);
    component = fixture.componentInstance;
    productoService = TestBed.inject(PagoService);
    spyOn(productoService, 'consultar').and.returnValue(
      of(listaPagos)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaPagos.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});
