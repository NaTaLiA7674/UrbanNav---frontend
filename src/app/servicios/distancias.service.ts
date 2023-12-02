import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DistanciasModel } from '../modelos/distancias.model';

@Injectable({
  providedIn: 'root'
})
export class DistanciasService {
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;

  constructor(private http: HttpClient) { }

  //Listar paradas utilizando el listarCiudad
  listarDistancias(): Observable<DistanciasModel[]> {
    return this.http.get<DistanciasModel[]>(`${this.url_base}distancias?filter={"include":[{"relation":"origen"}, {"relation": "destino"}]}`);
  }

  AgregarDistancias(model: DistanciasModel): Observable<DistanciasModel> {
    return this.http.post<DistanciasModel>(`${this.url_base}distancias`, {
      kilometros: model.kilometros,
      origenId: model.origenId,
      destinoId: model.destinoId,
    });
  }

  BuscarDistancia(id: number): Observable<DistanciasModel> {
    return this.http.get<DistanciasModel>(`${this.url_base}distancias/${id}`);
  }

  BuscarDistanciaOrigenDestino(id: number): Observable<DistanciasModel> {
    return this.http.get<DistanciasModel>(`${this.url_base}distancias/${id}?filter={"include":[{"relation":"origen"}, {"relation": "destino"}]}`);
  }

  EditarDistancias(model: DistanciasModel): Observable<DistanciasModel> {
    return this.http.put(`${this.url_base}distancias/${model.id}`, {
      kilometros: model.kilometros,
      origenId: model.origenId,
      destinoId: model.destinoId,
    });
  }

   EliminarDistancias(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url_base}distancias/${id}`);
   }

}
