import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { Reto19Component } from './principal/reto19/reto19.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path:"vista",component:VistaComponent},
  {path:"busqueda",component:BusquedaComponent},
  {path:"form",component:FormularioComponent},
  {path:"reto19",component:Reto19Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
