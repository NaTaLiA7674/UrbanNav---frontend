import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { usuarioModel } from '../modelos/usuario.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url_base: String = ConfiguracionRutasBackend.urlSeguridad;

  constructor(private http: HttpClient) { 
  }

  AgregarUsuario(usuario: usuarioModel): Observable<usuarioModel>{
    return this.http.post(`${this.url_base}usuario`, usuario);
  }

  EditarUsuario(usuario: usuarioModel): Observable<usuarioModel>{
    return this.http.put(`${this.url_base}usuario/${usuario._id}`, usuario);
  }

  BuscarUsuario(id: number): Observable<usuarioModel>{
    return this.http.get<usuarioModel>(`${this.url_base}usuario/${id}`);
  }
}
