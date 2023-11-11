import { Component } from '@angular/core';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent {
  constructor(
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cerrarSesión();
  }

  cerrarSesión() {
    this.servicioSeguridad.RemoverDatosUsuarioValidado();
    this.router.navigate(['']);
  }
}
