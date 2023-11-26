import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParadaModel } from '../modelos/parada.model';
import { CiudadModel } from '../modelos/ciudad.model';

@Injectable({
  providedIn: 'root'
})
export class ParadaService {
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;

  constructor(private http: HttpClient) { }

  listarCiudad(): Observable<CiudadModel[]> {
    return this.http.get<CiudadModel[]>(`${this.url_base}ciudad?filter={"include":[{"relation":"parada"}]}`);
  }

  //Listar paradas utilizando el listarCiudad
  listarParadas(): Observable<ParadaModel[]> {
    return this.http.get<ParadaModel[]>(`${this.url_base}parada`);
  }

  AgregarParadas(model: ParadaModel): Observable<ParadaModel> {
    return this.http.post<ParadaModel>(`${this.url_base}parada`, model);
  }

  BuscarParadas(id: number): Observable<ParadaModel> {
    return this.http.get<ParadaModel>(`${this.url_base}parada/${id}`);
  }
  
  EditarParadas(model: ParadaModel): Observable<ParadaModel> {
    return this.http.put(`${this.url_base}parada/${model.id}`, model);
  }
  
  EliminarParadas(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url_base}parada/${id}`);
  }
  
}
