import { Injectable } from '@angular/core';
import { usuarioModel } from '../modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { Observable } from 'rxjs';
import { UsuarioValidadoModel } from '../modelos/usuario.validado.model';
import { BehaviorSubject } from 'rxjs';
import { PasajeroModel } from '../modelos/pasajero.model';
import { ConductorModel } from '../modelos/conductor.model';
import { MedioPagoModel } from '../modelos/medio-pago.model';
import { VehiculoModel } from '../modelos/vehiculo.model';
import { LicenciaModel } from '../modelos/licencia.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  urlBase: string = ConfiguracionRutasBackend.urlSeguridad;
  urlBaseLogica: string = ConfiguracionRutasBackend.urlLogicaNegocios;
  constructor(private http: HttpClient) { 
    this.validacionDeSesion();
  }

   /**
   * Identificar usuario
   * @param usuario 
   * @param clave 
   * @returns datos del usuario validado
   */
  IdentificarUsuario(usuario: string, clave: string): Observable<usuarioModel> {
    return this.http.post<usuarioModel>(`${this.urlBase}identificar-usuario`, {
      correo: usuario,
      clave: clave
    });
  }

  /**
   * Almacena los datos del usuario identificado
   * @param datos datos del usuario
   */
  AlmacenarDatosUsuarioIdentificado(datos: usuarioModel): boolean {
    console.log("datos a almacenar", datos);
    localStorage.removeItem("datos-usuario");
    let cadena = JSON.stringify(datos);
    let  datosLS = localStorage.getItem("datos-usuario");
    if(datosLS){
      console.log("datos ya almacenados");
      return false;
    }else{
      localStorage.setItem("datos-usuario", cadena);
      console.log("Almacenando datos...");
      return true;
    }
  }

  /**
   * Cerrando sesión
   */
  RemoverDatosUsuarioValidado(){
    let datosUsuario = localStorage.getItem("datos-usuario");
    let datosSesion = localStorage.getItem("datos-sesion");
    if (datosUsuario){
      localStorage.removeItem("datos-usuario");
    }
    if(datosSesion){
      localStorage.removeItem("datos-sesion");
    }
    this.ActualizarComportamientoUsuario(new UsuarioValidadoModel());
  }

  /**
   * Busca los datos en localstorage de un usuario
   * @returns 
   */
  ObtenerDatosUsuarioLs(): usuarioModel | null{
    let datosLS = localStorage.getItem("datos-usuario");
    console.log(datosLS);
    if(datosLS){
      let datos = JSON.parse(datosLS);
      return datos;
    }else{
      return null;
    }
  }

  /**
   * Validar 2fa
   * @param idUsuario 
   * @param codigo 
   * @returns 
   */
  ValidarCodigo2fa(idUsuario: string, codigo: string): Observable<UsuarioValidadoModel> {
    return this.http.post<UsuarioValidadoModel>(`${this.urlBase}verificar-2fa`, {
      usuarioId: idUsuario,
      codigo2fa: codigo
    });
  }

  /**
   * 
   * @returns Medios de pago guardados en el backend de logica de negocios
   */
  ObtenerOpcionesMedioPago(): Observable<MedioPagoModel> {
    return this.http.get<MedioPagoModel>(`${this.urlBaseLogica}medio-pago`);
  }

  /**
   * datos del pasajero como usuario público
   * @param datos 	
   * @returns 
   */
  RegistrarPasajeroPublico(datos: any): Observable<PasajeroModel>{
    return this.http.post<PasajeroModel>(`${this.urlBaseLogica}cliente`, datos);
  }

  /**
   * datos del conductor como usuario público
   * @param datos 
   * @returns 
   */
  RegistrarConductorPublico(datos: any): Observable<ConductorModel>{
    return this.http.post<ConductorModel>(`${this.urlBaseLogica}conductor`, datos);
  }

  /**
   * datos del vehiculo para ingresar cuando un conductor se registre
   * @param datos 
   * @returns 
   */
  RegistrarVehiculo(datos: any): Observable<VehiculoModel>{
    return this.http.post<VehiculoModel>(`${this.urlBaseLogica}vehiculo`, datos);
  }

  /**
   * datos de la licencia para ingresar cuando un conductor se registre
   * @param datos 
   * @returns 
   */
  RegistrarLicencia(datos: any): Observable<LicenciaModel>{
    return this.http.post<LicenciaModel>(`${this.urlBaseLogica}licencia`, datos);
  }

  /**
   * Guarda en localsorage la información del usuario validado
   * @param datos datos del usuario validado
   * @returns respuesta
   */
  AlmacenarDatosUsuarioValidado(datos: UsuarioValidadoModel): boolean {
    let datosLS = localStorage.getItem("datos-sesion");
    if(datosLS != null){
      return false;
    }else{
      let datosString = JSON.stringify(datos);
      localStorage.setItem("datos-sesion", datosString);
      this.ActualizarComportamientoUsuario(datos);
      return true;
    }
  }

  RecuperarClavePorUsuario(usuario: string): Observable<usuarioModel>{
    return this.http.post<usuarioModel>(`${this.urlBase}recuperar-clave`, {
      correo: usuario
    });
  }

  /**Administración de la sesión de usuario */

  datosUsuarioValidado = new BehaviorSubject<UsuarioValidadoModel>(new UsuarioValidadoModel());

  ObtenerDatosSesion():Observable<UsuarioValidadoModel>{
    return this.datosUsuarioValidado.asObservable();
  }

  validacionDeSesion(){
    let ls = localStorage.getItem("datos-sesion");
    if (ls){
      let objUsuario = JSON.parse(ls);
      this.ActualizarComportamientoUsuario(objUsuario);
    }
  }

  ActualizarComportamientoUsuario(datos: UsuarioValidadoModel){
    return this.datosUsuarioValidado.next(datos);
  }

  CambiarClave(idUsuario: string, clave: string): Observable<usuarioModel>{
    return this.http.post<usuarioModel>(`${this.urlBase}cambiar-clave`, {
      usuarioId: idUsuario,
      clave: clave
    });
  }

}
