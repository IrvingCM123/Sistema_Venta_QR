import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IniciarSesion_Port } from '../../../config/Interface/IniciarSesion/IniciarSesion.port';
import { IniciarSesion_Entity } from '../class/IniciarSesion.entity';

@Injectable({
  providedIn: 'root'
})

export class Use_Class_Login {

  constructor(private _gateway: IniciarSesion_Port) { }

  postIniciarSesion(Correo_Electronico: string, Contraseña: string): Observable<IniciarSesion_Entity> {
    return this._gateway.postIniciarSesion(Correo_Electronico, Contraseña);
  }
}

