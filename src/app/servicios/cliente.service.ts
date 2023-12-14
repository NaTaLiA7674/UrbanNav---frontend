import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteModel } from '../modelos/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;

  constructor(private http: HttpClient) { }

  listarClientes(): Observable<ClienteModel[]> {
    return this.http.get<ClienteModel[]>(`${this.url_base}cliente`);
  }

}
