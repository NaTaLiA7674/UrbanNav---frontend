import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { DistanciasModel } from 'src/app/modelos/distancias.model';
import { ParadaModel } from 'src/app/modelos/parada.model';
import { DistanciasService } from 'src/app/servicios/distancias.service';

@Component({
  selector: 'app-eliminar-distancias',
  templateUrl: './eliminar-distancias.component.html',
  styleUrls: ['./eliminar-distancias.component.css']
})
export class EliminarDistanciasComponent {
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;
  recorId: number = 0;
  kilometros: number = 0;
  origen: ParadaModel | undefined;
  destino: ParadaModel | undefined;

  constructor(
    private servicio: DistanciasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recorId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.BuscarDistancia();
  }

  BuscarDistancia() {
    this.servicio.BuscarDistanciaOrigenDestino(this.recorId).subscribe({
      next: (datos: DistanciasModel) => {
        console.log('Datos recuperados:', datos);
        this.kilometros = datos.kilometros!;
        this.origen = datos.origen!;
        this.destino = datos.destino!;
      },
      error: (err) => {
        console.log(err)
        alert("El registro no existe")
      }
    })
  }

  EliminarDistancia() {
    this.servicio.EliminarDistancias(this.recorId).subscribe({
      next: (data: any) => {
        alert("Información eliminada correctamente");
        this.router.navigate(['/parametros/distancias-listar']);
      },
      error: (error: any) => {
        alert("Error almacenando la información");
      }
    });
  }
}


