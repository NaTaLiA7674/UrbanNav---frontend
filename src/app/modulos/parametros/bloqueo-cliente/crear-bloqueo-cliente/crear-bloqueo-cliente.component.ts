import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { BloqueoClienteModel } from 'src/app/modelos/bloqueo.cliente.model';
import { BloqueoClienteService } from 'src/app/servicios/bloqueo-cliente.service';

@Component({
  selector: 'app-crear-bloqueo-cliente',
  templateUrl: './crear-bloqueo-cliente.component.html',
  styleUrls: ['./crear-bloqueo-cliente.component.css']
})
export class CrearBloqueoClienteComponent {
  fGroup: FormGroup = new FormGroup({});
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;

  constructor(
    private fb: FormBuilder,
    private servicio: BloqueoClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
    if (this.fGroup.invalid) {
      alert("Debe diligenciar todos los campos del formulario");
    } else {
      let model = this.obtenerRegistro();
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

  obtenerRegistro(): BloqueoClienteModel {
    let model = new BloqueoClienteModel();
    model.clienteId = this.obtenerDatos["clienteId"].value;
    model.comentario = this.obtenerDatos["comentario"].value;
    model.fecha = this.obtenerDatos["fecha"].value;
    return model;
  }

  get obtenerDatos() {
    return this.fGroup.controls;
  }
}
