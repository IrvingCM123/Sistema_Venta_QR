import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ViewRoutingModule } from './View-routing.module';
import { EmpleadosComponent } from './empleados/empleados.component';
@NgModule({
  imports: [
    CommonModule,
    ViewRoutingModule,
    FormsModule
  ],
  declarations: [
  
    EmpleadosComponent
  ]
})
export class ViewModule { }
