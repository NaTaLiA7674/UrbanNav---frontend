import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BloqueoClienteModel } from '../modelos/bloqueo.cliente.model';

@Injectable({
  providedIn: 'root'
})
export class BloqueoClienteService {
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;

  constructor(private http: HttpClient) { }

  listarBloqueoCliente(): Observable<BloqueoClienteModel[]> {
    return this.http.get<BloqueoClienteModel[]>(`${this.url_base}bloqueo-cliente?filter={"include":[{"relation":"cliente"}]}`);
  }

  AgregarBloqueoCliente(model: BloqueoClienteModel): Observable<BloqueoClienteModel> {
    return this.http.post<BloqueoClienteModel>(`${this.url_base}bloqueo-cliente`, {
      clienteId: model.clienteId,
      comentario: model.comentario,
      fecha: model.fecha
    });
  }

  BuscarBloqueoCliente(id: number): Observable<BloqueoClienteModel> {
    return this.http.get<BloqueoClienteModel>(`${this.url_base}bloqueo-cliente/${id}`);
  }
  
  EditarBloqueoCliente(model: BloqueoClienteModel): Observable<BloqueoClienteModel> {
    return this.http.put(`${this.url_base}bloqueo-cliente/${model.id}`, model);
  }
  
  EliminarBloqueoCliente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url_base}bloqueo-cliente/${id}`);
  }
}
