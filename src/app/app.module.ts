import { FormsModule } from '@angular/forms';
import { Login_Port } from 'src/app/config/Interface/Login/Login.port';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './views/registro/registro.component';
import { IniciarSesionComponent } from './views/iniciar-sesion/iniciar-sesion.component';
import { CacheComponent } from './views/cache/cache.component';
import { Login_Adapter } from './config/Connection/Login/Login.adapter';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    IniciarSesionComponent,
    CacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: Login_Port, useClass: Login_Adapter},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
