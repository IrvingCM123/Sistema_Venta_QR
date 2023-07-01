import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-personal",
    templateUrl: "./personal.component.html",
    styleUrls: ["./personal.component.scss"],
})
export class PersonalComponent implements OnInit {
    constructor() {}

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
        console.log(Numero_Personal);
        window.location.href = 'Sistema/Empleados'
    }
}
