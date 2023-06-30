import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class CacheComponent {
    constructor() {}

    ngOnInit(): void {}

    getItem_ByID(id: string): any {
        return localStorage.getItem(id);
    }

    setItem_ByID(id: string, item: any): void {
        localStorage.setItem(id, item);
    }

    deleteItem_ByID(id: string): void {
        localStorage.removeItem(id);
    }

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

