import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PagoService } from './pagoservice';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Pago } from '../model/pago';
import { HttpResponse } from '@angular/common/http';

describe('PagoService', () => {
  let httpMock: HttpTestingController;
  let service: PagoService;
  const apiEndpointPagoConsulta = `${environment.endpoint}/tiposFamilia`;
  const apiEndpointPago = `${environment.endpoint}/productos`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PagoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PagoService);
  });

  it('should be created', () => {
    const productService: PagoService = TestBed.inject(PagoService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar pagos', () => {
    const dummyPagos = [
      new Pago(1, '1111', true, 1000000, new Date('2022-02-16')), new Pago(2, '2222', false, 1000000, new Date('2022-02-16'))
    ];
    service.consultar().subscribe(productos => {
      expect(productos.length).toBe(2);
      expect(productos).toEqual(dummyPagos);
    });
    const req = httpMock.expectOne(apiEndpointPagoConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPagos);
  });

  it('deberia crear un pago', () => {
    const dummyPago = new Pago(1, '1111', true, 1000000, new Date('2022-02-16'));
    service.guardar(dummyPago).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointPago);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un producto', () => {
    const dummyPago = new Pago(1, '1111', true, 1000000, new Date('2022-02-16'));
    service.eliminar(dummyPago).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointPago}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
