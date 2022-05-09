import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertifiacionRoutingModule } from './certifiacion-routing.module';
import { CertifiacionComponent } from './certifiacion.component';


@NgModule({
  declarations: [
    CertifiacionComponent
  ],
  imports: [
    CommonModule,
    CertifiacionRoutingModule
  ]
})
export class CertifiacionModule { }
