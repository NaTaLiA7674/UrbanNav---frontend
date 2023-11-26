import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { BloqueoClienteModel } from 'src/app/modelos/bloqueo.cliente.model';
import { BloqueoClienteService } from 'src/app/servicios/bloqueo-cliente.service';

@Component({
  selector: 'app-editar-bloqueo-cliente',
  templateUrl: './editar-bloqueo-cliente.component.html',
  styleUrls: ['./editar-bloqueo-cliente.component.css']
})
export class EditarBloqueoClienteComponent {
  fGroup: FormGroup = new FormGroup({});
  url_base: String = ConfiguracionRutasBackend.urlLogicaNegocios;
  recorId: number = 0;

  constructor(
    private fb: FormBuilder,
    private servicio: BloqueoClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recorId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.construirFormulario();
    this.BuscarBloqueoCliente();
  }

  BuscarBloqueoCliente() {
    this.servicio.BuscarBloqueoCliente(this.recorId).subscribe({
      next: (datos: BloqueoClienteModel) => {
        this.obtenerDatos["id"].setValue(datos.id);
        this.obtenerDatos["clienteId"].setValue(datos.clienteId);
        this.obtenerDatos["comentario"].setValue(datos.comentario);
        this.obtenerDatos["fecha"].setValue(datos.fecha);
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
      clienteId: ['', [Validators.required]],
      comentario: ['', Validators.required],
      fecha: ['', [Validators.required]],
    });
  }

  EditarRegistro() {
    if (this.fGroup.invalid) {
      alert("Debe diligenciar todos los campos del formulario");
    } else {
      let model = this.obtenerRegistro();
      this.servicio.EditarBloqueoCliente(model).subscribe({
        next: (data: BloqueoClienteModel) => {
          alert("Información modificada correctamente");
          this.router.navigate(['/seguridad/usuario-listar']);
        },
        error: (error: any) => {
          alert("Error almacenando la información");
        }
      })
    }
  }

  obtenerRegistro(): BloqueoClienteModel {
    let model = new BloqueoClienteModel();
    model.id = this.obtenerDatos["id"].value;
    model.clienteId = this.obtenerDatos["clienteId"].value;
    model.comentario = this.obtenerDatos["comentario"].value;
    model.fecha = this.obtenerDatos["fecha"].value;
    return model;
  }

  get obtenerDatos() {
    return this.fGroup.controls;
  }
}


