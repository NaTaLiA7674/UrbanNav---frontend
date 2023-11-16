import { MedioPagoModel } from "./medio-pago.model";
import { ClienteModel } from "./cliente.model";

export class RegistroCompletoPasajeroModel {
    cliente?: ClienteModel;
    medioPago?: MedioPagoModel
}