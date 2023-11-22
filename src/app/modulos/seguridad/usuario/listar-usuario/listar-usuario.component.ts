import { Component } from '@angular/core';
import { usuarioModel } from 'src/app/modelos/usuario.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent {
  listaUsuarios: usuarioModel[] = [];

  constructor(
    private servicioSeguridad: SeguridadService
  ) { }

  ngOnInit(){
    this.servicioSeguridad.listarUsuarios().subscribe({
      next: (datos) => {
        this.listaUsuarios = datos;
      },
      error: (err) => {
        alert("Error leyendo la información")
      }
    })

  }
}
