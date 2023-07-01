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
        },
        {
            Nombre: "Diana Laura",
            Rango: "Empleado",
            Imagen: "https://bootdey.com/img/Content/avatar/avatar8.png",
            Sucursal: 12331
        },
        {
            Nombre: "Elizabeth",
            Rango: "Empleado",
            Imagen: "https://bootdey.com/img/Content/avatar/avatar3.png",
            Sucursal: 12331
        },
        {
            Nombre: "Ruben",
            Rango: "Empleado",
            Imagen: "https://bootdey.com/img/Content/avatar/avatar4.png",
            Sucursal: 12331
        },
        {
            Nombre: "Irving Rafael",
            Rango: "Empleado",
            Imagen: "https://bootdey.com/img/Content/avatar/avatar7.png",
            Sucursal: 12331,
        },
        {
            Nombre: "Diana Laura",
            Rango: "Empleado",
            Imagen: "https://bootdey.com/img/Content/avatar/avatar8.png",
            Sucursal: 12331
        },
        {
            Nombre: "Elizabeth",
            Rango: "Empleado",
            Imagen: "https://bootdey.com/img/Content/avatar/avatar3.png",
            Sucursal: 12331
        },
        {
            Nombre: "Ruben",
            Rango: "Empleado",
            Imagen: "https://bootdey.com/img/Content/avatar/avatar4.png",
            Sucursal: 12331
        }
    ];


    MostrarEmpleado() {
        console.log("Hola Mundo")
    }
}
