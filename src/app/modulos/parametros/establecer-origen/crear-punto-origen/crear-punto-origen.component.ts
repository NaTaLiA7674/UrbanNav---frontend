 import { Component } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { ParadaModel } from 'src/app/modelos/parada.model';
import { ubicacionConductorModel } from 'src/app/modelos/ubicacion.conductor.model';
import { ParadaService } from 'src/app/servicios/parada.service';
import { PuntoOrigenService } from 'src/app/servicios/punto-origen.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
 
 @Component({
   selector: 'app-crear-punto-origen',
   templateUrl: './crear-punto-origen.component.html',
   styleUrls: ['./crear-punto-origen.component.css']
 })
 export class CrearPuntoOrigenComponent {
    fGroup: FormGroup = new FormGroup({});
    url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;
    listaUbicaciones: ParadaModel[] = [];
    conductorId?: number = 0;
  
    constructor(
      private fb: FormBuilder,
      private servicio: PuntoOrigenService,
      private servicioParada: ParadaService,
      private servicioSeguridad: SeguridadService,
      private router: Router,
      private route: ActivatedRoute
    ) {}
    
  
    ngOnInit(): void {
      const usuarioActual = this.servicioSeguridad.ObtenerDatosUsuarioLs();
      this.servicioParada.listarParadas().subscribe({
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
        conductorId: [this.conductorId, [Validators.required]],
        origenId: ['', [Validators.required]],
      });
    }
  
    GuardarPunto() {
      if(this.fGroup.invalid) {
        alert("Debe diligenciar todos los campos del formulario");
      } else {
        let model = this.obtenerUbicacionConductor();
        this.servicio.AgregarUbicacionConductor(model).subscribe({
          next: (data: ubicacionConductorModel) => {
            alert("Información almacenada correctamente");
            this.router.navigate(['/parametros/establecer-origen-listar']);
          },
          error: (error: any) => {
            alert("Error almacenando la información");
          }
        })
      }
    }
  
    obtenerUbicacionConductor(): ubicacionConductorModel {
      let model = new ubicacionConductorModel();
      model.conductorId = parseInt(this.obtenerDatos["conductorId"].value);
      model.origenId = parseInt(this.obtenerDatos["origenId"].value);
      return model;
    }
  
    get obtenerDatos() {
      return this.fGroup.controls;
    }
  }
  