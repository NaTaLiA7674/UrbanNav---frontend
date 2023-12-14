import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { ListarBloqueoClienteComponent } from './bloqueo-cliente/listar-bloqueo-cliente/listar-bloqueo-cliente.component';
import { EditarBloqueoClienteComponent } from './bloqueo-cliente/editar-bloqueo-cliente/editar-bloqueo-cliente.component';
import { CrearBloqueoClienteComponent } from './bloqueo-cliente/crear-bloqueo-cliente/crear-bloqueo-cliente.component';
import { EliminarBloqueoClienteComponent } from './bloqueo-cliente/eliminar-bloqueo-cliente/eliminar-bloqueo-cliente.component';
import { ListarBloqueoConductorComponent } from './bloqueo-conductor/listar-bloqueo-conductor/listar-bloqueo-conductor.component';
import { EditarBloqueoConductorComponent } from './bloqueo-conductor/editar-bloqueo-conductor/editar-bloqueo-conductor.component';
import { CrearBloqueoConductorComponent } from './bloqueo-conductor/crear-bloqueo-conductor/crear-bloqueo-conductor.component';
import { EliminarBloqueoConductorComponent } from './bloqueo-conductor/eliminar-bloqueo-conductor/eliminar-bloqueo-conductor.component';
import { ListarBotonPanicoComponent } from './boton-panico/listar-boton-panico/listar-boton-panico.component';
import { EditarBotonPanicoComponent } from './boton-panico/editar-boton-panico/editar-boton-panico.component';
import { EliminarBotonPanicoComponent } from './boton-panico/eliminar-boton-panico/eliminar-boton-panico.component';
import { CrearBotonPanicoComponent } from './boton-panico/crear-boton-panico/crear-boton-panico.component';
import { ListarCalificacionClienteComponent } from './calificacion-cliente/listar-calificacion-cliente/listar-calificacion-cliente.component';
import { EditarCalificacionClienteComponent } from './calificacion-cliente/editar-calificacion-cliente/editar-calificacion-cliente.component';
import { CrearCalificacionClienteComponent } from './calificacion-cliente/crear-calificacion-cliente/crear-calificacion-cliente.component';
import { EliminarCalificacionClienteComponent } from './calificacion-cliente/eliminar-calificacion-cliente/eliminar-calificacion-cliente.component';
import { CrearDistanciasComponent } from './distancias/crear-distancias/crear-distancias.component';
import { ListarDistanciasComponent } from './distancias/listar-distancias/listar-distancias.component';
import { EditarDistanciasComponent } from './distancias/editar-distancias/editar-distancias.component';
import { EliminarDistanciasComponent } from './distancias/eliminar-distancias/eliminar-distancias.component';
import { ListarParadaComponent } from './parada/listar-parada/listar-parada.component';
import { CrearParadaComponent } from './parada/crear-parada/crear-parada.component';
import { EliminarParadaComponent } from './parada/eliminar-parada/eliminar-parada.component';
import { EditarParadaComponent } from './parada/editar-parada/editar-parada.component';
import { ListarSolicitudViajeComponent } from './solicitud-viaje/listar-solicitud-viaje/listar-solicitud-viaje.component';
import { EditarSolicitudViajeComponent } from './solicitud-viaje/editar-solicitud-viaje/editar-solicitud-viaje.component';
import { CrearSolicitudViajeComponent } from './solicitud-viaje/crear-solicitud-viaje/crear-solicitud-viaje.component';
import { EliminarSolicitudViajeComponent } from './solicitud-viaje/eliminar-solicitud-viaje/eliminar-solicitud-viaje.component';
import { ListarCalificacionConductorComponent } from './calificacion-conductor/listar-calificacion-conductor/listar-calificacion-conductor.component';
import { EditarCalificacionConductorComponent } from './calificacion-conductor/editar-calificacion-conductor/editar-calificacion-conductor.component';
import { CrearCalificacionConductorComponent } from './calificacion-conductor/crear-calificacion-conductor/crear-calificacion-conductor.component';
import { EliminarCalificacionConductorComponent } from './calificacion-conductor/eliminar-calificacion-conductor/eliminar-calificacion-conductor.component';
import { HistorialViajesListarComponent } from './historial-viajes/historial-viajes-listar/historial-viajes-listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CrearPuntoOrigenComponent } from './establecer-origen/crear-punto-origen/crear-punto-origen.component';
import { ListarPuntoOrigenComponent } from './establecer-origen/listar-punto-origen/listar-punto-origen.component';
import { CrearPuntoOrigenComponent } from './establecer-origen/crear-punto-origen/crear-punto-origen.component';


@NgModule({
  declarations: [
  
    ListarBloqueoClienteComponent,
       EditarBloqueoClienteComponent,
       CrearBloqueoClienteComponent,
       EliminarBloqueoClienteComponent,
       ListarBloqueoConductorComponent,
       EditarBloqueoConductorComponent,
       CrearBloqueoConductorComponent,
       EliminarBloqueoConductorComponent,
       ListarBotonPanicoComponent,
       EditarBotonPanicoComponent,
       EliminarBotonPanicoComponent,
       CrearBotonPanicoComponent,
       ListarCalificacionClienteComponent,
       EditarCalificacionClienteComponent,
       CrearCalificacionClienteComponent,
       EliminarCalificacionClienteComponent,
       CrearDistanciasComponent,
       ListarDistanciasComponent,
       EditarDistanciasComponent,
       EliminarDistanciasComponent,
       ListarParadaComponent,
       CrearParadaComponent,
       EliminarParadaComponent,
       EditarParadaComponent,
       ListarSolicitudViajeComponent,
       EditarSolicitudViajeComponent,
       CrearSolicitudViajeComponent,
       EliminarSolicitudViajeComponent,
       ListarCalificacionConductorComponent,
       EditarCalificacionConductorComponent,
       CrearCalificacionConductorComponent,
       EliminarCalificacionConductorComponent,
       HistorialViajesListarComponent,
       CrearPuntoOrigenComponent,
       ListarPuntoOrigenComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ParametrosModule { }
