import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SeguridadService } from '../servicios/seguridad.service';
import { Observable } from 'rxjs';

export const ValidarSesionActivaGuard = () => {

  const servicioSeguridad = inject(SeguridadService);
  const router = inject(Router)

  let existeSesion = servicioSeguridad.validacionDeSesion();
    if(existeSesion){
      return true;
    }
    router.navigate(['/inicio']);
    return false;
}
