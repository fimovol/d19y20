import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Asincrona20Component } from './principal/asincrona20/asincrona20.component';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path:"vista",component:VistaComponent},
  {path:"busqueda",component:BusquedaComponent},
  {path:"form",component:FormularioComponent},
  {path:"asin20",component:Asincrona20Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
