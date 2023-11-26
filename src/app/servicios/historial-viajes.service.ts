import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { HistorialViajeModel } from '../modelos/historial.viaje.model';

@Injectable({
  providedIn: 'root'
})
export class HistorialViajesService {
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;

  constructor(private http: HttpClient) { }

  listarHistorialViajes(cliente: HistorialViajeModel): Observable<HistorialViajeModel[]> {
    return this.http.get<HistorialViajeModel[]>(`${this.url_base}viaje/${cliente.clienteId}`).pipe(
      map(data => Array.isArray(data) ? data : [data])
    );
  }
  
}
