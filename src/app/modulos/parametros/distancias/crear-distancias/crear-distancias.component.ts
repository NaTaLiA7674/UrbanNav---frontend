import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { DistanciasModel } from 'src/app/modelos/distancias.model';
import { ParadaModel } from 'src/app/modelos/parada.model';
import { DistanciasService } from 'src/app/servicios/distancias.service';
import { ParadaService } from 'src/app/servicios/parada.service';

@Component({
  selector: 'app-crear-distancias',
  templateUrl: './crear-distancias.component.html',
  styleUrls: ['./crear-distancias.component.css']
})
export class CrearDistanciasComponent {
  fGroup: FormGroup = new FormGroup({});
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;
  listaDistancias: ParadaModel[] = [];

  constructor(
    private fb: FormBuilder,
    private servicio: DistanciasService,
    private servicioParadas: ParadaService,
    private router: Router
  ) {}

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
  }

  construirFormulario() {
    this.fGroup = this.fb.group({
      kilometros: ['', [Validators.required]],
      origenId: ['', [Validators.required]],
      destinoId: ['', [Validators.required]],
    });
  }

  GuardarDistancia() {
    if(this.fGroup.invalid) {
      alert("Debe diligenciar todos los campos del formulario");
    } else {
      let model = this.obtenerDistancia();
      this.servicio.AgregarDistancias(model).subscribe({
        next: (data: DistanciasModel) => {
          alert("Información almacenada correctamente");
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
    model.kilometros = parseInt(this.obtenerDatos["kilometros"].value);
    model.origenId = parseInt(this.obtenerDatos["origenId"].value);
    model.destinoId = parseInt(this.obtenerDatos["destinoId"].value);
    return model;
  }

  get obtenerDatos() {
    return this.fGroup.controls;
  }
}
