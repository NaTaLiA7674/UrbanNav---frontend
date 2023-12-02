import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { DistanciasModel } from 'src/app/modelos/distancias.model';
import { ParadaModel } from 'src/app/modelos/parada.model';
import { DistanciasService } from 'src/app/servicios/distancias.service';
import { ParadaService } from 'src/app/servicios/parada.service';

@Component({
  selector: 'app-editar-distancias',
  templateUrl: './editar-distancias.component.html',
  styleUrls: ['./editar-distancias.component.css']
})
export class EditarDistanciasComponent {
  fGroup: FormGroup = new FormGroup({});
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;
  listaDistancias: ParadaModel[] = [];
  recorId: number = 0;

  constructor(
    private fb: FormBuilder,
    private servicioParadas: ParadaService,
    private servicio: DistanciasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recorId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.servicioParadas.listarParadas().subscribe({
      next: (datos) => {
        this.listaDistancias = datos;
      },
      error: (err) => {
        console.log(err)
        alert("Error leyendo la información")
      }
    });
    this.construirFormulario();
    this.BuscarDistancia();
  }

  BuscarDistancia() {
    this.servicio.BuscarDistancia(this.recorId).subscribe({
      next: (datos: DistanciasModel) => {
        this.obtenerDatos["id"].setValue(datos.id);
        this.obtenerDatos["kilometros"].setValue(datos.kilometros);
        this.obtenerDatos["origenId"].setValue(datos.origenId);
        this.obtenerDatos["destinoId"].setValue(datos.destinoId);
      },
      error: (err) => {
        console.log(err)
        alert("El registro no existe")
      }
    })
  }

  construirFormulario() {
    this.fGroup = this.fb.group({
      id: ['', [Validators.required]],
      kilometros: ['', [Validators.required]],
      origenId: ['', [Validators.required]],
      destinoId: ['', [Validators.required]],
    });
  }

  EditarDistancia() {
    if (this.fGroup.invalid) {
      alert("Debe diligenciar todos los campos del formulario");
    } else {
      let model = this.obtenerDistancia();
      this.servicio.EditarDistancias(model).subscribe({
        next: (data: DistanciasModel) => {
          alert("Información modificada correctamente");
          this.router.navigate(['/parametros/distancias-listar']);
        },
        error: (error: any) => {
          alert("Error almacenando la información");
        }
      })
    }
  }

  obtenerDistancia(): DistanciasModel {
    let model = new DistanciasModel();
    model.id = parseInt(this.obtenerDatos["id"].value);
    model.kilometros = parseInt(this.obtenerDatos["kilometros"].value);
    model.origenId = parseInt(this.obtenerDatos["origenId"].value);
    model.destinoId = parseInt(this.obtenerDatos["destinoId"].value);
    return model;
  }

  get obtenerDatos() {
    return this.fGroup.controls;
  }
}

