import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-empleados",
    templateUrl: "./empleados.component.html",
    styleUrls: ["./empleados.component.scss"],
})
export class EmpleadosComponent implements OnInit {
    constructor() {} 

    ngOnInit(): void {}

    empleados = [
        {
            Nombre: "Irving Rafael",
            Apellidos: "Conde Marín",
            Telefono: 2721495728,
            Edad: 21,
            Estado_Civil: "Soltero",
            Ciudad: "Orizaba",
            Estado: "Veracruz",
            Codigo_Postal: 94310,
            Direccion: "Oriente 39A",
            Correo_Electronico: "Irving.CondeM@Gmail.com",
            imagen: "https://pm1.narvii.com/7342/f3dbcca9d5bb37ec8678ce94ef435edce34852cfr1-985-720v2_hq.jpg",
            Rango: "Empleado",
            Sucursal: "Orizaba, 2514",
            Experiencia: [
                { Valor: 45, Habilidad: "Diseño" },
                {Valor: 14, Habilidad: "Corte y Confección"},
            ],
        },
        {
            Nombre: "Maria Fernanda",
            Apellidos: "Silvestre Stalon",
            Telefono: 2721495728,
            Ciudad: "Orizaba",
            Correo_Electronico: "Irving.CondeM@Gmail.com",
            imagen: "https://pm1.narvii.com/7342/f3dbcca9d5bb37ec8678ce94ef435edce34852cfr1-985-720v2_hq.jpg",
            Experiencia: [
                { Valor: 45, Habilidad: "Diseño" },
                {Valor: 14, Habilidad: "Corte y Confección"},
            ],
        },
    ];
}
