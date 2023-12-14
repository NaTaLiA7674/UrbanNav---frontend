import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { BloqueoClienteModel } from 'src/app/modelos/bloqueo.cliente.model';
import { ClienteModel } from 'src/app/modelos/cliente.model';
import { BloqueoClienteService } from 'src/app/servicios/bloqueo-cliente.service';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear-bloqueo-cliente',
  templateUrl: './crear-bloqueo-cliente.component.html',
  styleUrls: ['./crear-bloqueo-cliente.component.css']
})
export class CrearBloqueoClienteComponent {
  fGroup: FormGroup = new FormGroup({});
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;
  listaClientes: ClienteModel[] = [];

  constructor(
    private fb: FormBuilder,
    private servicio: BloqueoClienteService,
    private servicioCliente: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.servicioCliente.listarClientes().subscribe({
      next: (datos) => {
        this.listaClientes = datos;
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
      clienteId: ['', [Validators.required]],
      comentario: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
    });
  }

  GuardarRegistro() {
    if(this.fGroup.invalid) {
      alert("Debe diligenciar todos los campos del formulario");
    } else {
      let model = this.obtenerBloqueoCliente();
      this.servicio.AgregarBloqueoCliente(model).subscribe({
        next: (data: BloqueoClienteModel) => {
          alert("Información almacenada correctamente");
          this.router.navigate(['/parametros/bloqueo-cliente-listar']);
        },
        error: (error: any) => {
          alert("Error almacenando la información");
        }
      })
    }
  }

  obtenerBloqueoCliente(): BloqueoClienteModel {
    let model = new BloqueoClienteModel();
    model.clienteId = parseInt(this.obtenerDatos["clienteId"].value);
    model.comentario = this.obtenerDatos["comentario"].value;
    model.fecha = new Date(this.obtenerDatos["fecha"].value);
    return model;
  }

  get obtenerDatos() {
    return this.fGroup.controls;
  }
}
