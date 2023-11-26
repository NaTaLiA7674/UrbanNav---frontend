import { Component } from '@angular/core';
import { HistorialViajeModel } from 'src/app/modelos/historial.viaje.model';
import { HistorialViajesService } from 'src/app/servicios/historial-viajes.service';

@Component({
  selector: 'app-historial-viajes-listar',
  templateUrl: './historial-viajes-listar.component.html',
  styleUrls: ['./historial-viajes-listar.component.css']
})
export class HistorialViajesListarComponent {
  listaHistorialViajes: HistorialViajeModel[] = [];

  constructor(
    private servicio: HistorialViajesService
  ) { }

  ngOnInit() {
    let cliente = this.obtenerCliente();
    this.servicio.listarHistorialViajes(cliente).subscribe({
      next: (datos) => {
        console.log(datos)
        this.listaHistorialViajes = datos;
      },
      error: (err) => {
        console.log(err)
        alert("Error leyendo la información")
      }
    })

  }

  //Falta corregir
  obtenerCliente(): HistorialViajeModel {
    let cliente = new HistorialViajeModel();
    cliente.clienteId = 1;
    return cliente;
  }

}
