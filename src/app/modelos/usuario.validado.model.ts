import { PermisoModel } from "./permiso.model";
import { usuarioModel } from "./usuario.model";

export class UsuarioValidadoModel{
    user?: usuarioModel;
    token?: string = "";
    menu: PermisoModel[]= []
}