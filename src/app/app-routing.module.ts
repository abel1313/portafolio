import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', 
    loadChildren: ()=> import('./habilidades/habilidades.module').then(m=> m.HabilidadesModule)
  },
  {
    path: 'proyectos', 
    loadChildren: ()=> import('./proyectos/proyectos.module').then(m=> m.ProyectosModule)
  },
  {
    path: 'tecnologias', 
    loadChildren: ()=> import('./tecnologias/tecnologias.module').then(m=> m.TecnologiasModule)
  },
  {
    path: 'certificacion', 
    loadChildren: ()=> import('./certifiacion/certifiacion.module').then(m=> m.CertifiacionModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
