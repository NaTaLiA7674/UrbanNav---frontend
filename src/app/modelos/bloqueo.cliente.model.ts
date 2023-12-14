import { ClienteModel } from "./cliente.model";

export class BloqueoClienteModel {
    id?: number;
    clienteId?: number;
    comentario?: string;
    fecha?: Date;
    cliente?: ClienteModel = new ClienteModel();
}
