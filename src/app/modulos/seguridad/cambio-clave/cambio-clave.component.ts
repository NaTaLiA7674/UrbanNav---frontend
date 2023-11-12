import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Router } from '@angular/router';
import { usuarioModel } from 'src/app/modelos/usuario.model';
import { MD5 } from 'crypto-js';


@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent {
  usuarioId = "";
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) {

  }

  ngOnInit() {
    let datos = this.servicioSeguridad.ObtenerDatosUsuarioLs();
    if (datos != null) {
      this.usuarioId = datos._id!;
      console.log(this.usuarioId);
      this.construirFormulario();
    } else {
      this.router.navigate(['/seguridad/identificar-usuario']);
    }
  }

  construirFormulario() {
    this.fGroup = this.fb.group({
      claveActual: ['', [Validators.required,]],
      nuevaClave: ['', [Validators.required,]],
      confirmarClave: ['', [Validators.required,]],
    },
    {
      validator: this.compararClaves('nuevaClave', 'confirmarClave')
    });
  }

  compararClaves(claveControl: string, confirmarClaveControl: string) {
    return (group: FormGroup) => {
      const clave = group.controls[claveControl];
      const confirmarClave = group.controls[confirmarClaveControl];
  
      if (clave.value !== confirmarClave.value) {
        confirmarClave.setErrors({ noCoincide: true });
      } else {
        confirmarClave.setErrors(null);
      }
    };
  }

  CambiarClave() {
    if (this.fGroup.invalid) {
      alert("Datos incompletos");
    } else {
      let nuevaClave = this.obtenerFormGroup['nuevaClave'].value;
  
      this.servicioSeguridad.CambiarClave(this.usuarioId, nuevaClave).subscribe({
        next: (datos: usuarioModel) => {
          alert("Clave cambiada correctamente");
          console.log(datos);
          // Aquí deberías utilizar la nueva clave sin cifrar
          this.servicioSeguridad.AlmacenarDatosUsuarioIdentificado(datos);
          this.router.navigate([""]);
        },
        error: (err) => {
          console.log(err);
          alert("Ha ocurrido un error cambiando la clave");
        }
      });
    }
  }
  

  get obtenerFormGroup() {
    return this.fGroup.controls;
  }

}
