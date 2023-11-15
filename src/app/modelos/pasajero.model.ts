import { MedioPagoModel } from "./medio-pago.model";

export class PasajeroModel {
    id?: number;
    primerNombre?: string;
    segundoNombre?: string;
    primerApellido?: string;
    segundoApellido?: string;
    correo?: string;
    celular?: string;
    clave?: string;
    rolId?: string;
    medioPago?: MedioPagoModel;
    contactoEmergenciaNombre?: string;
    contactoEmergenciaTelefono?: string;
}