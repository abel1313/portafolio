import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnologiasRoutingModule } from './tecnologias-routing.module';
import { TecnologiasComponent } from './tecnologias.component';

const DIRECTIVAS = [
  TecnologiasComponent
];

@NgModule({
  declarations: [
    DIRECTIVAS
  ],
  imports: [
    CommonModule,
    TecnologiasRoutingModule
  ],
  exports:[
    DIRECTIVAS
  ]
})
export class TecnologiasModule { }
