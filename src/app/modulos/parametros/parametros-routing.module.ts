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

const routes: Routes = [
  {
    path: "bloqueo-cliente-listar",
    component: ListarBloqueoClienteComponent
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
    path: "parada-listar",
    component: ListarParadaComponent
  },
  {
    path: "solicitud-viaje-listar",
    component: ListarSolicitudViajeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
