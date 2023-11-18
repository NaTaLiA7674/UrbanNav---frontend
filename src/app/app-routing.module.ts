import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './publico/inicio/inicio.component';
import { RutaNoEncontradaComponent } from './publico/errores/ruta-no-encontrada/ruta-no-encontrada.component';
import { MisionComponent } from './publico/mision/mision.component';
import { VisionComponent } from './publico/vision/vision.component';
import { PqrsComponent } from './publico/pqrs/pqrs.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"mision",
    component: MisionComponent
  },
  {
    path: "vision",
    component: VisionComponent
  },
  {
    path: "pqrs",
    component: PqrsComponent
  },
  {
    path:"",
    pathMatch: "full",
    redirectTo: "/inicio"
  },
  {
    path: "seguridad",
    loadChildren: () => import('./modulos/seguridad/seguridad.module').then(modulo => modulo.SeguridadModule)
  },
  {
    path: "parametros",
    loadChildren: () => import('./modulos/parametros/parametros.module').then(modulo => modulo.ParametrosModule)
  },
  {
    path: "**",
    component: RutaNoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
