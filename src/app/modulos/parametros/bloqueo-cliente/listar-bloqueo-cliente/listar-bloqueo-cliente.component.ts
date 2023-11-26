import { Component } from '@angular/core';
import { BloqueoClienteModel } from 'src/app/modelos/bloqueo.cliente.model';
import { BloqueoClienteService } from 'src/app/servicios/bloqueo-cliente.service';

@Component({
  selector: 'app-listar-bloqueo-cliente',
  templateUrl: './listar-bloqueo-cliente.component.html',
  styleUrls: ['./listar-bloqueo-cliente.component.css']
})
export class ListarBloqueoClienteComponent {
  listaBloqueoCliente: BloqueoClienteModel[] = [];

  constructor(
    private servicio: BloqueoClienteService
  ) { }

  ngOnInit() {
    this.servicio.listarBloqueoCliente().subscribe({
      next: (datos) => {
        this.listaBloqueoCliente = datos;
      },
      error: (err) => {
        console.log(err)
        alert("Error leyendo la información")
      }
    })

  }
}
