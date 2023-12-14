import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { ParadaModel } from 'src/app/modelos/parada.model';
import { SolicitudViajeModel } from 'src/app/modelos/solicitud.viaje.model';
import { SolicitudViajeService } from 'src/app/servicios/solicitud-viaje.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-solicitud-viaje',
  templateUrl: './crear-solicitud-viaje.component.html',
  styleUrls: ['./crear-solicitud-viaje.component.css']
})
export class CrearSolicitudViajeComponent {
  fGroup: FormGroup = new FormGroup({});
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;
  opcionesPuntoOrigen: ParadaModel[] = [];
  opcionesPuntoDestino: ParadaModel[] = [];
  costoRutaMasCorta: number = 0;
  modalAbierto: boolean = false;

  constructor(
    private fb: FormBuilder,
    private servicio: SolicitudViajeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.construirFormulario();
    this.CargarOpcionesPuntoOrigen();
    this.CargarOpcionesPuntoDestino();
  }

  construirFormulario() {
    this.fGroup = this.fb.group({
      puntoOrigen: ['', [Validators.required]],
      puntoDestino: ['', [Validators.required]],
    });
  }

  /**
 * Carga las opciones de medio de pago
 */
  CargarOpcionesPuntoOrigen() {
    // Llama al servicio de seguridad para obtener las opciones de medio de pago
    this.servicio.ObtenerOpcionesPuntoOrigen().subscribe({
      next: (opciones: ParadaModel | ParadaModel[]) => {
        // Si es un array, asigna directamente, si es un solo objeto, envuélvelo en un array
        this.opcionesPuntoOrigen = Array.isArray(opciones) ? opciones : [opciones];
      },
      error: (err) => {
        console.error("Error al cargar los puntos de parada:", err);
      }
    });
  }

  /**
  * Carga las opciones de medio de pago
  */
  CargarOpcionesPuntoDestino() {
    // Llama al servicio de seguridad para obtener las opciones de medio de pago
    this.servicio.ObtenerOpcionesPuntoDestino().subscribe({
      next: (opciones: ParadaModel | ParadaModel[]) => {
        // Si es un array, asigna directamente, si es un solo objeto, envuélvelo en un array
        this.opcionesPuntoDestino = Array.isArray(opciones) ? opciones : [opciones];
      },
      error: (err) => {
        console.error("Error al cargar los puntos de parada:", err);
      }
    });
  }

  CostoRutaMasCorta() {
    // Llama a la función ObtenerRutaMasCorta directamente
    const solicitudViaje = this.obtenerSolicitudViaje();
    this.servicio.ObtenerRutaMasCorta(solicitudViaje).subscribe({
      next: (costo: number) => {
        // Realiza las acciones necesarias con el costo obtenido
        console.log(`El costo de la ruta más corta es: ${costo}`);
        this.costoRutaMasCorta = costo;
        console.log(this.costoRutaMasCorta);

        // Abre el modal solo si no se ha abierto previamente
        if (!this.modalAbierto) {
          this.modalAbierto = true;
          this.mostrarModal();
        }
      },
      error: (err) => {
        console.error("Error al obtener la ruta más corta:", err);
      }
    });
  }

  abrirModal() {
    if (!this.modalAbierto) {
      this.CostoRutaMasCorta();
    }
  }

  mostrarModal() {
    this.CostoRutaMasCorta();
    Swal.fire({
      title: '¿Desea aceptar el costo del viaje?',
      text: `El costo de la ruta más corta es: ${this.costoRutaMasCorta}`,
      icon: 'info',
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      this.modalAbierto = false;

    });
  }

  aceptarSolicitud() {
  }

  obtenerSolicitudViaje(): SolicitudViajeModel {
    let model = new SolicitudViajeModel();
    model.puntoOrigenId = this.obtenerDatos["puntoOrigen"].value;
    model.puntoDestinoId = this.obtenerDatos["puntoDestino"].value;
    return model;
  }

  get obtenerDatos() {
    return this.fGroup.controls;
  }
}
