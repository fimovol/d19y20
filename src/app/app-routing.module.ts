import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { RetoComponent } from './principal/reto/reto.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path:"vista",component:VistaComponent},
  {path:"busqueda",component:BusquedaComponent},
  {path:"form",component:FormularioComponent},
  {path:"reto",component:RetoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
