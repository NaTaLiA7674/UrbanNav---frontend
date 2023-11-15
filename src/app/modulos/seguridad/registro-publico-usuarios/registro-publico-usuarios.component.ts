import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConductorModel } from 'src/app/modelos/conductor.model';
import { LicenciaModel } from 'src/app/modelos/licencia.model';
import { MedioPagoModel } from 'src/app/modelos/medio-pago.model';
import { PasajeroModel } from 'src/app/modelos/pasajero.model';
import { VehiculoModel } from 'src/app/modelos/vehiculo.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-registro-publico-usuarios',
  templateUrl: './registro-publico-usuarios.component.html',
  styleUrls: ['./registro-publico-usuarios.component.css']
})
export class RegistroPublicoUsuariosComponent {
  fGroup: FormGroup = new FormGroup({});
  seccionActual: string = 'tipoUsuario';
  opcionesDeMedioDePago: MedioPagoModel[] = [];
  mostrarBotonSiguiente: boolean = true;

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService
  ) {
  }

  ngOnInit() {
    this.ConstruirFormulario();
    this.CargarOpcionesMedioDePago();
  }

  /**
   * Construcción del formulario con los controles
   */
  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      tipoUsuario: ['', [Validators.required]],
      primerNombre: ['', [Validators.required, Validators.minLength(2)]],
      segundoNombre: ['', [Validators.minLength(2)]],
      primerApellido: ['', [Validators.required, Validators.minLength(2)]],
      segundoApellido: ['', [Validators.minLength(2)]],
      correo: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.minLength(12)]],
      //Agregar campos específicos de pasajero y de conductor
      nombreContactoEmergencia: ['', [Validators.required, Validators.minLength(2)]],
      telefonoContactoEmergencia: ['', [Validators.required, Validators.minLength(12)]],
      vehiculo: this.fb.group({
        matricula: ['', Validators.required],
        modelo: ['', Validators.required],
        marca: ['', Validators.required], // Agrega más campos según sea necesario
        color: ['', Validators.required]  // Agrega más campos según sea necesario
      }),
      licencia: this.fb.group({
        vigencia: ['', Validators.required],
        restricciones: ['', Validators.required],
      }),
      medioPago: ['', [Validators.required]]
    });
  }

  /**
  * Carga las opciones de medio de pago
  */
  CargarOpcionesMedioDePago() {
    // Llama al servicio de seguridad para obtener las opciones de medio de pago
    this.servicioSeguridad.ObtenerOpcionesMedioPago().subscribe({
      next: (opciones: MedioPagoModel | MedioPagoModel[]) => {
        // Si es un array, asigna directamente, si es un solo objeto, envuélvelo en un array
        this.opcionesDeMedioDePago = Array.isArray(opciones) ? opciones : [opciones];
      },
      error: (err) => {
        console.error("Error al cargar las opciones de medio de pago:", err);
      }
    });
  }


  /**
   * Función para pasar a la siguiente sección
   */
  Siguiente() {
    // Validar que el campo 'tipoUsuario' esté presente y tenga un valor
    const tipoUsuarioControl = this.fGroup.get('tipoUsuario');
    if (tipoUsuarioControl && tipoUsuarioControl.value) {
      // Determinar la siguiente sección solo si no se ha cambiado automáticamente
      if (this.seccionActual === 'tipoUsuario') {
        if (tipoUsuarioControl.value === 'pasajero') {
          this.seccionActual = 'pasajero';
        } else if (tipoUsuarioControl.value === 'conductor') {
          this.seccionActual = 'conductor';
        }
        // Ocultar el botón después de hacer clic en "Siguiente"
        this.mostrarBotonSiguiente = false;
      }
    }
  }

  /**
   * Función de registro público
   */
  Registrarse(tipoUsuario: string) {
    const campos = this.ObtenerFormGroup;
    let datos: any;

    if (tipoUsuario === 'pasajero') {
      // Usar modelo de pasajero
      datos = {
        primerNombre: campos["primerNombre"].value,
        segundoNombre: campos["segundoNombre"].value,
        primerApellido: campos["primerApellido"].value,
        segundoApellido: campos["segundoApellido"].value,
        correo: campos["correo"].value,
        celular: campos["telefono"].value,
        nombreContactoEmergencia: campos["nombreContactoEmergencia"].value,
        telefonoContactoEmergencia: campos["telefonoContactoEmergencia"].value
      };

      // Crear instancia del modelo de pasajero y asignar datos
      const pasajero: PasajeroModel = new PasajeroModel();
      Object.assign(pasajero, datos);

      // Llamar al servicio de registro de pasajero
      this.servicioSeguridad.RegistrarPasajeroPublico(pasajero).subscribe({
        next: (respuesta: PasajeroModel) => {
          alert("Registro correcto, se ha enviado un mensaje para validar su dirección de correo electrónico.")
        },
        error: (err) => {
          alert("Se ha producido un error en el registro.")
        }
      });

    } else if (tipoUsuario === 'conductor') {
      // Usar modelo de conductor
      datos = {
        primerNombre: campos["primerNombre"].value,
        segundoNombre: campos["segundoNombre"].value,
        primerApellido: campos["primerApellido"].value,
        segundoApellido: campos["segundoApellido"].value,
        correo: campos["correo"].value,
        celular: campos["telefono"].value,
      };

      // Crear instancia del modelo de conductor y asignar datos
      const conductor: ConductorModel = new ConductorModel();
      Object.assign(conductor, datos);

      // Llamar al servicio de registro de conductor
      // Después de registrar el conductor
      this.servicioSeguridad.RegistrarConductorPublico(conductor).subscribe({
        next: (respuesta: ConductorModel) => {
          // Obtener el ID del conductor registrado
          const conductorId = respuesta.id;

          // Registrar el vehículo
          const vehiculoDatos = {
            matricula: campos["vehiculo"].value.matricula,
            modelo: campos["vehiculo"].value.modelo,
            marca: campos["vehiculo"].value.marca,
            color: campos["vehiculo"].value.color,
            conductorId: conductorId,
          };
          this.servicioSeguridad.RegistrarVehiculo(vehiculoDatos).subscribe({
            next: (respuestaVehiculo: VehiculoModel) => {
              // Procesar respuesta de vehículo si es necesario
            },
            error: (errorVehiculo) => {
              console.error("Error al registrar el vehículo:", errorVehiculo);
            }
          });

          // Registrar la licencia
          const licenciaDatos = {
            vigencia: new Date(campos["licencia"].value.vigencia).toISOString(),
            restricciones: campos["licencia"].value.restricciones,
            conductorId: conductorId,
          };
          this.servicioSeguridad.RegistrarLicencia(licenciaDatos).subscribe({
            next: (respuestaLicencia: LicenciaModel) => {
              // Procesar respuesta de licencia si es necesario
              alert("Registro exitoso, se ha enviado un mensaje para validar su dirección de correo electrónico");
            },
            error: (errorLicencia) => {
              console.error("Error al registrar la licencia:", errorLicencia);
            }
          });
        },
        error: (error) => {
          console.error("Error al registrar el conductor:", error);
        }
      });

    }
  }

  get ObtenerFormGroup() {
    return this.fGroup.controls;
  }
}