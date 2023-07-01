import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { CacheComponent } from "./cacheNavegador.service";

@Injectable({
    providedIn: "root",
})
export class CacheEmpleados {

    private Subject_EmpleadoSeleccionado = new Subject<any>();

    public Observable_EmpleadoSeleccionado = new Observable();

    public valor_Observable: any;

    constructor(private cache_navegador: CacheComponent) {

        const empleadoSeleccionado = cache_navegador.getItem_ByID(
            "empleadoSeleccionado"
        );

        if (empleadoSeleccionado) {

            this.Observable_EmpleadoSeleccionado = this.Subject_EmpleadoSeleccionado.asObservable();

            this.Subject_EmpleadoSeleccionado.subscribe(
                (valor) => {
                    this.valor_Observable = valor;
                }
            )       

            this.Subject_EmpleadoSeleccionado.next(empleadoSeleccionado);
            
        }       
    }

    public Empleado_Seleccionado(empleado: string | number) {
        
        this.Subject_EmpleadoSeleccionado.next(empleado);

        this.cache_navegador.setItem_ByID(
            "empleadoSeleccionado",
            empleado.toString()
        );
    }
}
