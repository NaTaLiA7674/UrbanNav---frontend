import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { SolicitudViajeModel } from '../modelos/solicitud.viaje.model';
import { Observable } from 'rxjs';
import { ParadaModel } from '../modelos/parada.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudViajeService {
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;

  constructor(private http: HttpClient) { }

  AgregarSolicitudViaje(model: SolicitudViajeModel): Observable<SolicitudViajeModel> {
    return this.http.post<SolicitudViajeModel>(`${this.url_base}viaje`, model);
  }

  ObtenerRutaMasCorta(model: SolicitudViajeModel): Observable<number> {
      return this.http.get<number>(`${this.url_base}obtener-ruta-mas-corta/${model.puntoOrigenId}/${model.puntoDestinoId}`);
  }

  /**
   * 
   * @returns Paradas guardadas en el backend de logica de negocios
   */
  ObtenerOpcionesPuntoOrigen(): Observable<ParadaModel> {
    return this.http.get<ParadaModel>(`${this.url_base}parada`);
  }

  /**
   * 
   * @returns Paradas guardadas en el backend de logica de negocios
   */
  ObtenerOpcionesPuntoDestino(): Observable<ParadaModel> {
    return this.http.get<ParadaModel>(`${this.url_base}parada`);
  }
  
}
