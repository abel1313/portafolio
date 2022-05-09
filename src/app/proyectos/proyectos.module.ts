import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './proyectos.component';

const DIRECTIVAS =  [
  ProyectosComponent
];

@NgModule({
  declarations: [
    DIRECTIVAS
  ],
  exports:[
    DIRECTIVAS
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule
  ]
})
export class ProyectosModule { }
