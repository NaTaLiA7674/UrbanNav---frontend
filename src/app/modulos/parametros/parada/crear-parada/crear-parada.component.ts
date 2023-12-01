import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { CiudadModel } from 'src/app/modelos/ciudad.model';
import { ParadaModel } from 'src/app/modelos/parada.model';
import { ParadaService } from 'src/app/servicios/parada.service';

@Component({
  selector: 'app-crear-parada',
  templateUrl: './crear-parada.component.html',
  styleUrls: ['./crear-parada.component.css']
})
export class CrearParadaComponent {
  fGroup: FormGroup = new FormGroup({});
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;
  listaUbicaciones: CiudadModel[] = [];

  constructor(
    private fb: FormBuilder,
    private servicio: ParadaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.servicio.listarCiudad().subscribe({
      next: (datos) => {
        this.listaUbicaciones = datos;
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
      nombreParada: ['', [Validators.required]],
      informacionAdicional: [''],
      clave: ['', [Validators.required]],
      ubicacionId: ['', [Validators.required]],
    });
  }

  GuardarParada() {
    if(this.fGroup.invalid) {
      alert("Debe diligenciar todos los campos del formulario");
    } else {
      let model = this.obtenerParada();
      this.servicio.AgregarParadas(model).subscribe({
        next: (data: ParadaModel) => {
          alert("Información almacenada correctamente");
          this.router.navigate(['/parametros/parada-listar']);
        },
        error: (error: any) => {
          alert("Error almacenando la información");
        }
      })
    }
  }

  obtenerParada(): ParadaModel {
    let model = new ParadaModel();
    model.nombreParada = this.obtenerDatos["nombreParada"].value;
    model.informacionAdicional = this.obtenerDatos["informacionAdicional"].value;
    model.clave = this.obtenerDatos["clave"].value;
    model.ubicacionId = parseInt(this.obtenerDatos["ubicacionId"].value);
    return model;
  }

  get obtenerDatos() {
    return this.fGroup.controls;
  }
}
