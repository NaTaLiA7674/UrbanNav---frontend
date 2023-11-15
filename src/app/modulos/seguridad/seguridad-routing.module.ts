import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificacionUsuarioComponent } from './identificacion-usuario/identificacion-usuario.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionTwofaComponent } from './identificacion-twofa/identificacion-twofa.component';
import { InicioSeguridadComponent } from './inicio-seguridad/inicio-seguridad.component';
import { RegistroPublicoUsuariosComponent } from './registro-publico-usuarios/registro-publico-usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: InicioSeguridadComponent,
    children: [
      {
        path:"identificar-usuario",
        component: IdentificacionUsuarioComponent
      },
      {
        path: "cambiar-clave",
        component: CambioClaveComponent
      },
      {
        path: "recuperar-clave",
        component: RecuperarClaveComponent
      },
      {
        path: "cerrar-sesion",
        component: CerrarSesionComponent
      },
      {
        path: "2fa",
        component: IdentificacionTwofaComponent
      },
      {
        path: "registro-publico",
        component: RegistroPublicoUsuariosComponent
      },
      {
        path: "**",
        redirectTo: "identificar-usuario",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
