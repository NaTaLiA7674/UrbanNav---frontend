import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarBloqueoClienteComponent } from './bloqueo-cliente/listar-bloqueo-cliente/listar-bloqueo-cliente.component';
import { ListarBloqueoConductorComponent } from './bloqueo-conductor/listar-bloqueo-conductor/listar-bloqueo-conductor.component';
import { ListarBotonPanicoComponent } from './boton-panico/listar-boton-panico/listar-boton-panico.component';
import { ListarCalificacionConductorComponent } from './calificacion-conductor/listar-calificacion-conductor/listar-calificacion-conductor.component';
import { ListarCalificacionClienteComponent } from './calificacion-cliente/listar-calificacion-cliente/listar-calificacion-cliente.component';
import { ListarDistanciasComponent } from './distancias/listar-distancias/listar-distancias.component';
import { ListarParadaComponent } from './parada/listar-parada/listar-parada.component';
import { ListarSolicitudViajeComponent } from './solicitud-viaje/listar-solicitud-viaje/listar-solicitud-viaje.component';
import { CrearBloqueoClienteComponent } from './bloqueo-cliente/crear-bloqueo-cliente/crear-bloqueo-cliente.component';
import { EditarBloqueoClienteComponent } from './bloqueo-cliente/editar-bloqueo-cliente/editar-bloqueo-cliente.component';
import { EliminarBloqueoClienteComponent } from './bloqueo-cliente/eliminar-bloqueo-cliente/eliminar-bloqueo-cliente.component';
import { CrearParadaComponent } from './parada/crear-parada/crear-parada.component';
import { EditarParadaComponent } from './parada/editar-parada/editar-parada.component';
import { EliminarParadaComponent } from './parada/eliminar-parada/eliminar-parada.component';
import { HistorialViajesListarComponent } from './historial-viajes/historial-viajes-listar/historial-viajes-listar.component';
import { CrearSolicitudViajeComponent } from './solicitud-viaje/crear-solicitud-viaje/crear-solicitud-viaje.component';
import { EditarSolicitudViajeComponent } from './solicitud-viaje/editar-solicitud-viaje/editar-solicitud-viaje.component';
import { EliminarSolicitudViajeComponent } from './solicitud-viaje/eliminar-solicitud-viaje/eliminar-solicitud-viaje.component';
import { CrearDistanciasComponent } from './distancias/crear-distancias/crear-distancias.component';
import { EliminarDistanciasComponent } from './distancias/eliminar-distancias/eliminar-distancias.component';
import { EditarDistanciasComponent } from './distancias/editar-distancias/editar-distancias.component';

const routes: Routes = [
  {
    path: "bloqueo-cliente-listar",
    component: ListarBloqueoClienteComponent
  },
  {
    path: "bloqueo-cliente-crear",
    component: CrearBloqueoClienteComponent
  },
  {
    path: "bloqueo-cliente-editar/:id",
    component: EditarBloqueoClienteComponent
  },
  {
    path: "bloqueo-cliente-eliminar/:id",
    component: EliminarBloqueoClienteComponent
  },
  {
    path: "bloqueo-conductor-listar",
    component: ListarBloqueoConductorComponent
  },
  {
    path: "boton-panico-listar",
    component: ListarBotonPanicoComponent
  },
  {
    path: "calificacion-conductor-listar",
    component: ListarCalificacionConductorComponent
  },
  {
    path: "calificacion-cliente-listar",
    component: ListarCalificacionClienteComponent
  },
  {
    path: "distancias-listar",
    component: ListarDistanciasComponent
  },
  {
    path: "distancias-crear",
    component: CrearDistanciasComponent
  },
  {
    path: "distancias-editar/:id",
    component: EditarDistanciasComponent
  },
  {
    path: "distancias-eliminar/:id",
    component: EliminarDistanciasComponent
  },
  {
    path: "parada-listar",
    component: ListarParadaComponent
  },
  {
    path: "parada-crear",
    component: CrearParadaComponent
  },
  {
    path: "parada-editar/:id",
    component: EditarParadaComponent
  },
  {
    path: "parada-eliminar/:id",
    component: EliminarParadaComponent
  },
  {
    path: "solicitud-viaje-listar",
    component: ListarSolicitudViajeComponent
  },
  {
    path: "solicitud-viaje-crear",
    component: CrearSolicitudViajeComponent
  },
  {
    path: "solicitud-viaje-editar/:id",
    component: EditarSolicitudViajeComponent
  },
  {
    path: "solicitud-viaje-eliminar/:id",
    component: EliminarSolicitudViajeComponent
  },
  {
    path: "historial-viajes-listar",
    component: HistorialViajesListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
