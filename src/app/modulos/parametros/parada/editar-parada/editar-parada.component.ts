import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { CiudadModel } from 'src/app/modelos/ciudad.model';
import { ParadaModel } from 'src/app/modelos/parada.model';
import { ParadaService } from 'src/app/servicios/parada.service';

@Component({
  selector: 'app-editar-parada',
  templateUrl: './editar-parada.component.html',
  styleUrls: ['./editar-parada.component.css']
})
export class EditarParadaComponent {
  fGroup: FormGroup = new FormGroup({});
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;
  listaUbicaciones: CiudadModel[] = [];
  recorId: number = 0;

  constructor(
    private fb: FormBuilder,
    private servicio: ParadaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recorId = this.route.snapshot.params["id"];
  }

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
    this.BuscarParada();
  }

  BuscarParada() {
    this.servicio.BuscarParadas(this.recorId).subscribe({
      next: (datos: ParadaModel) => {
        this.obtenerDatos["id"].setValue(datos.id);
        this.obtenerDatos["nombreParada"].setValue(datos.nombreParada);
        this.obtenerDatos["informacionAdicional"].setValue(datos.informacionAdicional);
        this.obtenerDatos["clave"].setValue(datos.clave);
        this.obtenerDatos["ubicacionId"].setValue(datos.ubicacionId);
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
      nombreParada: ['', [Validators.required]],
      informacionAdicional: [''],
      clave: ['', [Validators.required]],
      ubicacionId: ['', [Validators.required]],
    });
  }

  EditarParada() {
    if (this.fGroup.invalid) {
      alert("Debe diligenciar todos los campos del formulario");
    } else {
      let model = this.obtenerParada();
      this.servicio.EditarParadas(model).subscribe({
        next: (data: ParadaModel) => {
          alert("Información modificada correctamente");
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
    model.id = parseInt(this.obtenerDatos["id"].value);
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

