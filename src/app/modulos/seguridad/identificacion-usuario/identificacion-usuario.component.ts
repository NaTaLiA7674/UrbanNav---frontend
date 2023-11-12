import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import {MD5} from 'crypto-js';
import { Router } from '@angular/router';
import { usuarioModel } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-identificacion-usuario',
  templateUrl: './identificacion-usuario.component.html',
  styleUrls: ['./identificacion-usuario.component.css']
})
export class IdentificacionUsuarioComponent {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.ConstruirFormulario();
  }

  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required,]]
    });
  }

  IdentificarUsuario() {
    if (this.fGroup.invalid) {
      alert("Datos incompletos");
    } else {
      let usuario = this.obtenerFormGroup['usuario'].value;
      let clave = this.obtenerFormGroup['clave'].value;
      let claveCifrada = MD5(clave).toString();
  
      this.servicioSeguridad.IdentificarUsuario(usuario, claveCifrada).subscribe({
        next: (datos: usuarioModel) => {
          console.log(datos);
  
          if (this.servicioSeguridad.AlmacenarDatosUsuarioIdentificado(datos)) {
            // Redirigir al usuario a la página 2FA si es necesario
            this.router.navigate(['/seguridad/2fa']);
          } else {
            // En este punto, las credenciales son válidas pero la lógica de almacenamiento falló
            alert("Error al almacenar datos del usuario identificado");
          }
        },
        error: (err) => {
          // No mostrar errores en la consola para errores 401
          if (err.status !== 401) {
            console.log("Error al identificar usuario");
          }
  
          // Manejar errores específicos, por ejemplo, si las credenciales son inválidas
          if (err.status === 401) {
            alert("Usuario o contraseña incorrectos");
          } else {
            // Otros errores no manejados específicamente
            alert("Error desconocido al identificar usuario");
          }
        }
      });
    }
  }
  
  get obtenerFormGroup() {
    return this.fGroup.controls;
  }
}
