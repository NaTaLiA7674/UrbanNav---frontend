import { CiudadModel } from "./ciudad.model";

export class ParadaModel {
    id?: number;
    nombreParada?: string;
    informacionAdicional?: string;
    clave?: string;
    ubicacionId?: number;
    ubicacion?: CiudadModel = new CiudadModel();
}
