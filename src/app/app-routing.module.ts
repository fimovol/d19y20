import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Asincrona20Component } from './principal/asincrona20/asincrona20.component';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { Reto19Component } from './principal/reto19/reto19.component';
import { Reto20Component } from './principal/reto20/reto20.component';
import { RetoComponent } from './principal/reto/reto.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path:"vista",component:VistaComponent},
  {path:"busqueda",component:BusquedaComponent},
  {path:"form",component:FormularioComponent},
  {path:"reto19",component:Reto19Component},
  {path:"reto20",component:Reto20Component},
  {path:"reto",component:RetoComponent},
  {path:"asin20",component:Asincrona20Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
