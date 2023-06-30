import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  empleado = [
    {Nombre: "Irving Rafael", Rango: "Empleado", Imagen: "URL", "Sucursal": 12331 }
  ]

}
