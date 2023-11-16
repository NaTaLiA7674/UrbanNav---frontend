import { LicenciaModel } from "./licencia.model";
import { VehiculoModel } from "./vehiculo.model";
import { ConductorModel } from "./conductor.model";

export class RegistroCompletoConductorModel {
    conductor?: ConductorModel;
    vehiculo?: VehiculoModel;
    licencia?: LicenciaModel;
}