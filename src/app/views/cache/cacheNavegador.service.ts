import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class CacheComponent {
    constructor() {}

    ngOnInit(): void {}

    /* El sistema podrá almacenar en el navegador distintos items, este método sirve para poder traerlos y leerlos, a través del 
    ID por el que fueron guardados */
    getItem_ByID(id: string): any {
        return localStorage.getItem(id);
    }

    /* Método para almacenar items en el caché del navegador, se necesitará de un id, es decir, un nombre para identificar dicho elemento;
    Así como también el valor de dicho item, es decir, lo que se desea almacenar en el caché */
    setItem_ByID(id: string, item: any): void {
        localStorage.setItem(id, item);
    }

    /* Método para eliminar items del caché, a través del ID por el que fue guardado */
    deleteItem_ByID(id: string): void {
        localStorage.removeItem(id);
    }

    /* Eliminar todo registro del caché del navegador */
    dropAllItems() {
        if (caches && caches.keys) {
            caches.keys().then(function (keys) {
                keys.forEach(function (key) {
                    caches.delete(key);
                });
            });
        }

        localStorage.clear();

        sessionStorage.clear();
    }
}

