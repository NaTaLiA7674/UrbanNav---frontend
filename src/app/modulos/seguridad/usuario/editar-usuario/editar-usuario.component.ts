import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { usuarioModel } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  fGroup: FormGroup = new FormGroup({});
  url_base: String = ConfiguracionRutasBackend.urlSeguridad;
  recorId: number = 0;

  constructor(
    private fb: FormBuilder,
    private servicio: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.recorId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.construirFormulario();
    this.BuscarUsuario();
  }

  BuscarUsuario(){
    this.servicio.BuscarUsuario(this.recorId).subscribe({
      next: (datos: usuarioModel) => {
        this.obtenerDatos["_id"].setValue(datos._id);
        this.obtenerDatos["primerNombre"].setValue(datos.primerNombre);
        this.obtenerDatos["segundoNombre"].setValue(datos.segundoNombre);
        this.obtenerDatos["primerApellido"].setValue(datos.primerApellido);
        this.obtenerDatos["segundoApellido"].setValue(datos.segundoApellido);
        this.obtenerDatos["correo"].setValue(datos.correo);
        this.obtenerDatos["celular"].setValue(datos.celular);
        this.obtenerDatos["rolId"].setValue(datos.rolId);
      },
      error: (err) => {
        console.log(err)
        alert("El registro no existe")
      }
    })
  }

  construirFormulario() {
    this.fGroup = this.fb.group({
      _id: ['', [Validators.required]],
      primerNombre: ['', [Validators.required]],
      segundoNombre: [''],
      primerApellido: ['', [Validators.required]],
      segundoApellido: [''],
      correo: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      rolId: ['', [Validators.required]],
    });
  }

  EditarRegistro() {
    if (this.fGroup.invalid) {
      alert("Debe diligenciar todos los campos del formulario");
    } else {
      let model = this.obtenerRegistro();
      this.servicio.EditarUsuario(model).subscribe({
        next: (data: usuarioModel) => {
          alert("Información modificada correctamente");
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
    model._id = this.obtenerDatos["_id"].value;
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

