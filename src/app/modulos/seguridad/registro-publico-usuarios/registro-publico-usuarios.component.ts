import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConductorModel } from 'src/app/modelos/conductor.model';
import { PasajeroModel } from 'src/app/modelos/pasajero.model';
import { usuarioModel } from 'src/app/modelos/usuario.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service'; 

@Component({
  selector: 'app-registro-publico-usuarios',
  templateUrl: './registro-publico-usuarios.component.html',
  styleUrls: ['./registro-publico-usuarios.component.css']
})
export class RegistroPublicoUsuariosComponent {
  fGroup: FormGroup = new FormGroup({});
  seccionActual: string = 'tipoUsuario';

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService
  ) {
  }

  ngOnInit() {
    this.ConstruirFormulario();
  }

  /**
   * Construcción del formulario con los controles
   */
  ConstruirFormulario() {
    this.fGroup = this.fb.group({
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
    });
  }

  /**
   * Función para pasar a la siguiente sección
   */
  Siguiente() {
    // Validar que el campo 'tipoUsuario' esté presente y tenga un valor
    const tipoUsuarioControl = this.fGroup.get('tipoUsuario');
    if (tipoUsuarioControl && tipoUsuarioControl.value) {
      // Determinar la siguiente sección
      if (tipoUsuarioControl.value === 'pasajero') {
        this.seccionActual = 'pasajero';
      } else if (tipoUsuarioControl.value === 'conductor') {
        this.seccionActual = 'conductor';
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
        vehiculo: campos["vehiculo"].value,
        licencia: campos["licencia"].value
      };

      // Crear instancia del modelo de conductor y asignar datos
      const conductor: ConductorModel = new ConductorModel();
      Object.assign(conductor, datos);

      // Llamar al servicio de registro de conductor
      this.servicioSeguridad.RegistrarConductorPublico(conductor).subscribe({
        next: (respuesta: ConductorModel) => {
          alert("Registro correcto, se ha enviado un mensaje para validar su dirección de correo electrónico.")
        },
        error: (err) => {
          alert("Se ha producido un error en el registro.")
        }
      });
    }
  }

  get ObtenerFormGroup() {
    return this.fGroup.controls;
  }

}