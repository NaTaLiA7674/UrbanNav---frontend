import { ParadaModel } from "./parada.model";

export class HistorialViajeModel {
    id?: number;
    clienteId?: number;
    puntoOrigenId?: number;
    puntoDestinoId?: number;
    costo?: number;
    botonPanicoId?: number;
    puntoOrigen?: ParadaModel = new ParadaModel(); 
    puntoDestino?: ParadaModel = new ParadaModel();
}
