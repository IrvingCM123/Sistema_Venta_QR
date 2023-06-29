import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Login_Port } from '../../Interface/Login/Login.port';
import { Login_Entity } from 'src/app/Rules/Login/class/Login.entity';

@Injectable({
  providedIn: 'root'
})

export class Login_Adapter implements Login_Port {

  private url_Api = environment.apiDocente + "IniciarSesion";

  constructor (private http: HttpClient) { }

  postLogin (Correo_Electronico: string, Contraseña: string): Observable<Login_Entity> {
    return this.http.post<Login_Entity>(this.url_Api, {Correo_Electronico, Contraseña});
  }
}
