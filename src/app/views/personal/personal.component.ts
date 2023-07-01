import { Component, OnInit } from "@angular/core";
import { CacheEmpleados } from "../cache/cacheEmpleados.service";
import { Router } from '@angular/router';

@Component({
    selector: "app-personal",
    templateUrl: "./personal.component.html",
    styleUrls: ["./personal.component.scss"],
})
export class PersonalComponent implements OnInit {
    constructor(
        private cache_empleado: CacheEmpleados,
        private router: Router
    ) {}

    ngOnInit(): void {}

    empleados = [
        {
            Nombre: "Irving Rafael",
            Rango: "Empleado",
            Imagen: "https://bootdey.com/img/Content/avatar/avatar7.png",
            Sucursal: 12331,
            Numero_Personal: 13512,
        },
        {
            Nombre: "Diana Laura",
            Rango: "Empleado",
            Imagen: "https://bootdey.com/img/Content/avatar/avatar8.png",
            Sucursal: 12331,
            Numero_Personal: 12512,
        },
        {
            Nombre: "Elizabeth",
            Rango: "Empleado",
            Imagen: "https://bootdey.com/img/Content/avatar/avatar3.png",
            Sucursal: 12331,
            Numero_Personal: 14512,
        },
        {
            Nombre: "Ruben",
            Rango: "Empleado",
            Imagen: "https://bootdey.com/img/Content/avatar/avatar4.png",
            Sucursal: 12331,
            Numero_Personal: 15512,
        },
        {
            Nombre: "Irving Rafael",
            Rango: "Empleado",
            Imagen: "https://bootdey.com/img/Content/avatar/avatar7.png",
            Sucursal: 12331,
            Numero_Personal: 16512,
        },
        {
            Nombre: "Diana Laura",
            Rango: "Empleado",
            Imagen: "https://bootdey.com/img/Content/avatar/avatar8.png",
            Sucursal: 12331,
            Numero_Personal: 17512,
        },
        {
            Nombre: "Elizabeth",
            Rango: "Empleado",
            Imagen: "https://bootdey.com/img/Content/avatar/avatar3.png",
            Sucursal: 12331,
            Numero_Personal: 18512,
        },
        {
            Nombre: "Ruben",
            Rango: "Empleado",
            Imagen: "https://bootdey.com/img/Content/avatar/avatar4.png",
            Sucursal: 12331,
            Numero_Personal: 19512,
        },
    ];

    MostrarEmpleado(Numero_Personal: string | number) {
        this.cache_empleado.Empleado_Seleccionado(Numero_Personal);
        this.router.navigate(['/Sistema/Empleados'])
    }
}
