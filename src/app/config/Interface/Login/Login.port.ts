import { Observable } from "rxjs"
import { Login_Entity } from "src/app/Rules/Login/class/Login.entity";

export abstract class Login_Port {
  abstract postLogin (Correo_Electronico: string, Contraseña: string) : Observable<Login_Entity>;
}
