import { Component } from '@angular/core';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioValidadoModel } from 'src/app/modelos/usuario.validado.model';

@Component({
  selector: 'app-identificacion-twofa',
  templateUrl: './identificacion-twofa.component.html',
  styleUrls: ['./identificacion-twofa.component.css']
})
export class IdentificacionTwofaComponent {
  usuarioId: string = "";
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private servicioSeguridad: SeguridadService,
    private fb: FormBuilder,
    private router: Router
  ) { }

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
      codigo: ['', [Validators.required]]
    });
  }

  ValidarCodigo2fa() {
    if (this.fGroup.invalid) {
      alert("Debe ingresar el código");
    } else {
      let codigo2fa = this.obtenerFormGroup['codigo'].value;
      this.servicioSeguridad.ValidarCodigo2fa(this.usuarioId, codigo2fa).subscribe({
        next: (datos: UsuarioValidadoModel) => {
          console.log(datos);
          this.servicioSeguridad.AlmacenarDatosUsuarioValidado(datos);
          this.router.navigate([""]);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  get obtenerFormGroup() {
    return this.fGroup.controls;
  }
}
