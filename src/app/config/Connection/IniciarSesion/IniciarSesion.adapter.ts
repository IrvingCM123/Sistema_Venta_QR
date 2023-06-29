import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { IniciarSesion_Port } from '../../Interface/IniciarSesion/IniciarSesion.port';
import { IniciarSesion_Entity } from 'src/app/Rules/IniciarSesion/class/IniciarSesion.entity';

@Injectable({
  providedIn: 'root'
})

export class IniciarSesion_Adapter implements IniciarSesion_Port {

  private url_Api = environment.apiDocente + "IniciarSesion";

  constructor (private http: HttpClient) { }

  postIniciarSesion (Correo_Electronico: string, Contraseña: string): Observable<IniciarSesion_Entity> {
    return this.http.post<IniciarSesion_Entity>(this.url_Api, {Correo_Electronico, Contraseña});
  }
}
