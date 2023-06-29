import { Observable } from "rxjs"
import { IniciarSesion_Entity } from "src/app/Rules/IniciarSesion/class/IniciarSesion.entity";

export abstract class IniciarSesion_Port {
  abstract postIniciarSesion (Correo_Electronico: string, Contraseña: string) : Observable<IniciarSesion_Entity>;
}
