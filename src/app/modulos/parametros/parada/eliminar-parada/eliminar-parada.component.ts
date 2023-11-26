import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { ParadaModel } from 'src/app/modelos/parada.model';
import { ParadaService } from 'src/app/servicios/parada.service';

@Component({
  selector: 'app-eliminar-parada',
  templateUrl: './eliminar-parada.component.html',
  styleUrls: ['./eliminar-parada.component.css']
})
export class EliminarParadaComponent {
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;
  recorId: number = 0;
  nombreParada: string = "";
  informacionAdicional: string = "";
  clave: string = "";
  ubicacionId: number = 0;

  constructor(
    private servicio: ParadaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recorId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.BuscarParada();
  }

  BuscarParada() {
    this.servicio.BuscarParadas(this.recorId).subscribe({
      next: (datos: ParadaModel) => {
        this.nombreParada = datos.nombreParada!;
        this.informacionAdicional = datos.informacionAdicional!;
        this.clave = datos.clave!;
        this.ubicacionId = datos.ubicacionId!;
      },
      error: (err) => {
        console.log(err)
        alert("El registro no existe")
      }
    })
  }

  EliminarParada() {
      this.servicio.EliminarParadas(this.recorId).subscribe({
        next: (data: any) => {
          alert("Información eliminada correctamente");
          this.router.navigate(['/parametros/parada-listar']);
        },
        error: (error: any) => {
          alert("Error almacenando la información");
        }
      });
  }
}


