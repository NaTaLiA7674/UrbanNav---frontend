import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { BloqueoClienteModel } from 'src/app/modelos/bloqueo.cliente.model';
import { BloqueoClienteService } from 'src/app/servicios/bloqueo-cliente.service';

@Component({
  selector: 'app-eliminar-bloqueo-cliente',
  templateUrl: './eliminar-bloqueo-cliente.component.html',
  styleUrls: ['./eliminar-bloqueo-cliente.component.css']
})
export class EliminarBloqueoClienteComponent {
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;
  recorId: number = 0;
  clienteId: number = 0;
  comentario: string = "";
  fecha: Date = new Date();

  constructor(
    private servicio: BloqueoClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recorId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.BuscarBloqueoCliente();
  }

  BuscarBloqueoCliente() {
    this.servicio.BuscarBloqueoCliente(this.recorId).subscribe({
      next: (datos: BloqueoClienteModel) => {
        this.clienteId = datos.clienteId!;
        this.comentario = datos.comentario!;
        this.fecha = datos.fecha!;
      },
      error: (err) => {
        console.log(err)
        alert("El registro no existe")
      }
    })
  }

  EliminarBloqueoCliente() {
      this.servicio.EliminarBloqueoCliente(this.recorId).subscribe({
        next: (data: any) => {
          alert("Información eliminada correctamente");
          this.router.navigate(['/parametros/bloqueo-cliente-listar']);
        },
        error: (error: any) => {
          alert("Error almacenando la información");
        }
      });
  }
}


