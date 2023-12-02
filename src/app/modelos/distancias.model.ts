import { ParadaModel } from "./parada.model";

export class DistanciasModel {
    id?: number;
    kilometros?: number;
    origenId?: number;
    destinoId?: number;
    origen?: ParadaModel = new ParadaModel(); 
    destino?: ParadaModel = new ParadaModel();
}
