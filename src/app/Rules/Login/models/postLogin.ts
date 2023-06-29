import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login_Port } from '../../../config/Interface/Login/Login.port';
import { Login_Entity } from '../class/Login.entity';

@Injectable({
  providedIn: 'root'
})

export class Use_Class_Login {

  constructor(private _gateway: Login_Port) { }

  postLogin(Correo_Electronico: string, Contraseña: string): Observable<Login_Entity> {
    return this._gateway.postLogin(Correo_Electronico, Contraseña);
  }
}

