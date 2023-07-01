import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PerfilComponent } from './perfil';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  { path: '', redirectTo: 'CrearCuenta', pathMatch: 'full' },
  { path: 'IniciarSesion', component: IniciarSesionComponent},
  { path: 'CrearCuenta', component: RegistroComponent},
  { path: 'Perfil', component: PerfilComponent},
  { path: 'Empleados', component: EmpleadosComponent},
  { path: 'Personal', component: PersonalComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule {}
