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
}
