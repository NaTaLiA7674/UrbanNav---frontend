import { LicenciaModel } from "./licencia.model";
import { VehiculoModel } from "./vehiculo.model";

export class ConductorModel {
    id?: number;
    primerNombre?: string;
    segundoNombre?: string;
    primerApellido?: string;
    segundoApellido?: string;
    correo?: string;
    celular?: string;
    clave?: string;
    rolId?: string;
    vehiculoId?: VehiculoModel;
    licenciaId?: LicenciaModel;
}