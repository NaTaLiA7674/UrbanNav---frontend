import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { ubicacionConductorModel } from '../modelos/ubicacion.conductor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuntoOrigenService {
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;

  constructor(private http: HttpClient) { }

  AgregarUbicacionConductor(model: ubicacionConductorModel): Observable<ubicacionConductorModel> {
    return this.http.post<ubicacionConductorModel>(`${this.url_base}ubicacionConductor`, model);
  }
  
}
