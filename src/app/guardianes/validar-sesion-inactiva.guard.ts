import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SeguridadService } from '../servicios/seguridad.service';
import { Observable } from 'rxjs';

export const ValidarSesionInactivaGuard = () => {

  const servicioSeguridad = inject(SeguridadService);
  const router = inject(Router)

  let existeSesion = servicioSeguridad.validacionDeSesion();
    if(existeSesion){
      router.navigate(['/inicio']);
      return false;
    }
    return true;
}

/** 
@Injectable({
  providedIn: 'root'
})
export class ValidarSesionInactivaGuard implements CanActivate {

  constructor(
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    let existeSesion = this.servicioSeguridad.validacionDeSesion();
    if(existeSesion){
      this.router.navigate(['/inicio']);
      return false;
    }
    return true;
  }
}
*/

