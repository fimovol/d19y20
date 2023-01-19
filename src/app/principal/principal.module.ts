import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaComponent } from './vista/vista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserintersectorService } from '../services/userintersector.service';
import { AsincronaComponent } from './asincrona/asincrona.component';

@NgModule({
  declarations: [
    VistaComponent,
    FormularioComponent,
    BusquedaComponent,
    MenuComponent,
    AsincronaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    VistaComponent,
    FormularioComponent,
    BusquedaComponent,
    MenuComponent,
    AsincronaComponent
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserintersectorService,
      multi: true
    }
  ]
})
export class PrincipalModule { }
