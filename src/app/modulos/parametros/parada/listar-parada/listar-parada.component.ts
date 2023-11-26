import { Component } from '@angular/core';
import { ParadaModel } from 'src/app/modelos/parada.model';
import { ParadaService } from 'src/app/servicios/parada.service';

@Component({
  selector: 'app-listar-parada',
  templateUrl: './listar-parada.component.html',
  styleUrls: ['./listar-parada.component.css']
})
export class ListarParadaComponent {
  listaParadas: ParadaModel[] = [];

  constructor(
    private servicio: ParadaService
  ) { }

  ngOnInit() {
    this.servicio.listarParadas().subscribe({
      next: (datos) => {
        this.listaParadas = datos;
      },
      error: (err) => {
        console.log(err)
        alert("Error leyendo la información")
      }
    })

  }
}
