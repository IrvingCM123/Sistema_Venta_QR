import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class CacheDatos {
    constructor() {}

    /*
    El sistema podrá validar si se ha iniciado sesión o no, si no se ha iniciado sesión no se mostrará el sistema, solo podrá verse
    los formularios para iniciar sesión o crear cuenta, de caso contrario se mostrará el sistema normalmente.
  */
    private Subject_InicioSesion = new Subject<any>();
    protected Observable_InicioSesion =
        this.Subject_InicioSesion.asObservable();

    /*    Se almacenará el usuario que inició sesión para poder extraer sus datos del almacén de datos correspondiente.  */
    private Subject_UsuarioIngresado = new Subject<any>();
    protected Observable_UsuarioIngresado =
        this.Subject_UsuarioIngresado.asObservable();

    /*    El sistema podrá alternar sobre si mostrar el formulario para que el usuario inicie sesión o pueda crear una nueva cuenta.  */
    private Subject_InicioSesionORCrearCuenta = new Subject<any>();
    protected Observable_CrearCuenta =
        this.Subject_InicioSesionORCrearCuenta.asObservable();

    //Método para validar que se ha iniciado sesión en el sistema
    public validar_Login(valido: boolean) {
        this.Subject_InicioSesion.next(valido);
    }

    //Método para intercambiar formularios
    public cambiar_Formulario(formulario: string) {
        this.Subject_InicioSesionORCrearCuenta.next(formulario);
    }

    //Método para almacenar usuario, ya sea por nombre_usuario o id_personal
    public usuario_Activo(usuario: string | number) {
        this.Subject_UsuarioIngresado.next(usuario);
    }
}
