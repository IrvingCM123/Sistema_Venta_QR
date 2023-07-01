import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { CacheComponent } from "./cacheNavegador.service";

@Injectable({
    providedIn: "root",
})
export class CacheDatos {
    /*
    El sistema podrá validar si se ha iniciado sesión o no, si no se ha iniciado sesión no se mostrará el sistema, solo podrá verse
    los formularios para iniciar sesión o crear cuenta, de caso contrario se mostrará el sistema normalmente.
    */
    private Subject_InicioSesion = new Subject<any>();
    protected Observable_InicioSesion =
        this.Subject_InicioSesion.asObservable();
    public valor_InicioSesion_Observable: any;

    /*    Se almacenará el usuario que inició sesión para poder extraer sus datos del almacén de datos correspondiente.  */
    private Subject_UsuarioIngresado = new Subject<any>();
    protected Observable_UsuarioIngresado =
        this.Subject_UsuarioIngresado.asObservable();
    public valor_UsuarioIngresado_Observable: any;

    /*    El sistema podrá alternar sobre si mostrar el formulario para que el usuario inicie sesión o pueda crear una nueva cuenta.  */
    private Subject_InicioSesionORCrearCuenta = new Subject<any>();
    protected Observable_CrearCuenta =
        this.Subject_InicioSesionORCrearCuenta.asObservable();
    public valor_InicioSesionORCrearCuenta_Observable: any;

    constructor(private cache_navegador: CacheComponent) {
        const usuarioIngresado = 
            this.cache_navegador.getItem_ByID("Usuario");
        const inicioSesionValido =
            this.cache_navegador.getItem_ByID("Login_Valido");
        const mostrarFormulario =
            this.cache_navegador.getItem_ByID("Formulario");

        if (usuarioIngresado) {
            this.Observable_UsuarioIngresado =
                this.Subject_UsuarioIngresado.asObservable();

            this.Subject_UsuarioIngresado.subscribe((valor) => {
                this.valor_UsuarioIngresado_Observable = valor;
            });

            this.Subject_UsuarioIngresado.next(usuarioIngresado);
        }

        if (inicioSesionValido) {
            this.Observable_InicioSesion =
                this.Subject_InicioSesion.asObservable();

            this.Subject_InicioSesion.subscribe((valor) => {
                this.valor_InicioSesion_Observable = valor;
            });

            this.Subject_InicioSesion.next(inicioSesionValido);
        }

        if (mostrarFormulario) {
            this.Observable_CrearCuenta =
                this.Subject_InicioSesionORCrearCuenta.asObservable();

            this.Subject_InicioSesionORCrearCuenta.subscribe((valor) => {
                this.valor_InicioSesionORCrearCuenta_Observable = valor;
            });

            this.Subject_InicioSesionORCrearCuenta.next(mostrarFormulario);
        }
    }

    //Método para validar que se ha iniciado sesión en el sistema
    public validar_Login(valido: boolean) {
        this.Subject_InicioSesion.next(valido);

        this.cache_navegador.setItem_ByID("Login_Valido", valido);
    }

    //Método para intercambiar formularios
    public cambiar_Formulario(formulario: string) {
        this.Subject_InicioSesionORCrearCuenta.next(formulario);

        this.cache_navegador.setItem_ByID("Formulario", formulario);
    }

    //Método para almacenar usuario, ya sea por nombre_usuario o id_personal
    public usuario_Activo(usuario: string | number) {
        this.Subject_UsuarioIngresado.next(usuario);

        this.cache_navegador.setItem_ByID("Usuario", usuario);
    }
}
