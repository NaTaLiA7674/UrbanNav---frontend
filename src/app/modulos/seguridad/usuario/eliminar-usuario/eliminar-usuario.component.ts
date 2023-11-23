import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { usuarioModel } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent {
  url_base: String = ConfiguracionRutasBackend.urlSeguridad;
  recorId: number = 0;
  primerNombre: String = "";
  segundoNombre: String = "";
  primerApellido: String = "";
  segundoApellido: String = "";
  correo: String = "";
  celular: String = "";
  rolId: String = "";

  constructor(
    private servicio: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recorId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.BuscarUsuario();
  }

  BuscarUsuario() {
    this.servicio.BuscarUsuario(this.recorId).subscribe({
      next: (datos: usuarioModel) => {
        this.primerNombre = datos.primerNombre!;
        this.segundoNombre = datos.segundoNombre!;
        this.primerApellido = datos.primerApellido!;
        this.segundoApellido = datos.segundoApellido!;
        this.correo = datos.correo!;
        this.celular = datos.celular!;
        this.rolId = datos.rolId!;
      },
      error: (err) => {
        console.log(err)
        alert("El registro no existe")
      }
    })
  }

  EliminarUsuario() {
      this.servicio.EliminarUsuario(this.recorId).subscribe({
        next: (data: any) => {
          alert("Información eliminada correctamente");
          this.router.navigate(['/seguridad/usuario-listar']);
        },
        error: (error: any) => {
          alert("Error almacenando la información");
        }
      });
  }
}


