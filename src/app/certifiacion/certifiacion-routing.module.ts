import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertifiacionComponent } from './certifiacion.component';

const routes: Routes = [
  {
    path: '', 
    component: CertifiacionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertifiacionRoutingModule { }
