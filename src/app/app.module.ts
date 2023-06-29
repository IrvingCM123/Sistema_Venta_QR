import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PerfilComponent } from './views';
import { HistorialventaComponent } from './views';
import { VentaComponent } from './views';
import { MenuNavegacionComponent } from './views';

import { RegistroComponent } from './views/registro/registro.component';

import { IniciarSesion_Adapter } from './config/Connection/IniciarSesion/IniciarSesion.adapter';
import { IniciarSesion_Port } from 'src/app/config/Interface/IniciarSesion/IniciarSesion.port';
import { IniciarSesionComponent } from './views/iniciar-sesion/iniciar-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    IniciarSesionComponent,
    PerfilComponent,
    HistorialventaComponent,
    VentaComponent,
    MenuNavegacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: IniciarSesion_Port, useClass: IniciarSesion_Adapter},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
