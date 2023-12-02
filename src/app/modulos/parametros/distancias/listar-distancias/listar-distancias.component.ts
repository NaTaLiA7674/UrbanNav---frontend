import { Component } from '@angular/core';
import { DistanciasModel } from 'src/app/modelos/distancias.model';
import { DistanciasService } from 'src/app/servicios/distancias.service';

@Component({
  selector: 'app-listar-distancias',
  templateUrl: './listar-distancias.component.html',
  styleUrls: ['./listar-distancias.component.css']
})
export class ListarDistanciasComponent {
  listaDistancias: DistanciasModel[] = [];

  constructor(
    private servicio: DistanciasService
  ) { }

  ngOnInit() {
    this.servicio.listarDistancias().subscribe({
      next: (datos) => {
        this.listaDistancias = datos;
      },
      error: (err) => {
        console.log(err)
        alert("Error leyendo la información")
      }
    })

  }
}
