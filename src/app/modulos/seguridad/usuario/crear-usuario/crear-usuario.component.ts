import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { usuarioModel } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  fGroup: FormGroup = new FormGroup({});
  url_base: String = ConfiguracionRutasBackend.urlSeguridad;

  constructor(
    private fb: FormBuilder,
    private servicio: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.construirFormulario();
  }

  construirFormulario() {
    this.fGroup = this.fb.group({
      primerNombre: ['', [Validators.required]],
      segundoNombre: [''],
      primerApellido: ['', [Validators.required]],
      segundoApellido: [''],
      correo: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      rolId: ['', [Validators.required]],
    });
  }

  GuardarRegistro() {
    if(this.fGroup.invalid) {
      alert("Debe diligenciar todos los campos del formulario");
    } else {
      let model = this.obtenerRegistro();
      this.servicio.AgregarUsuario(model).subscribe({
        next: (data: usuarioModel) => {
          alert("Información almacenada correctamente");
          this.router.navigate(['/seguridad/usuario-listar']);
        },
        error: (error: any) => {
          alert("Error almacenando la información");
        }
      })
    }
  }

  obtenerRegistro(): usuarioModel {
    let model = new usuarioModel();
    model.primerNombre = this.obtenerDatos["primerNombre"].value;
    model.segundoNombre = this.obtenerDatos["segundoNombre"].value;
    model.primerApellido = this.obtenerDatos["primerApellido"].value;
    model.segundoApellido = this.obtenerDatos["segundoApellido"].value;
    model.correo = this.obtenerDatos["correo"].value;
    model.celular = this.obtenerDatos["celular"].value;
    model.rolId = this.obtenerDatos["rolId"].value;
    return model;
  }

  get obtenerDatos() {
    return this.fGroup.controls;
  }
}
