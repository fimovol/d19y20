import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-retoformregistro',
  templateUrl: './retoformregistro.component.html',
  styleUrls: ['./retoformregistro.component.css']
})
export class RetoformregistroComponent implements OnInit {

  constructor() { }
  nombre = ""
  apellido = ""
  user = ""
  pass = ""
  enviado = false
  ngOnInit(): void {
  } 
  onSubmit(){
    alert("mensaje de "+this.nombre+" "+this.apellido)
    this.enviado=true
    let datos = {
      nombre:this.nombre,
      apellido:this.apellido,
      user: this.user,
    }
    localStorage.setItem("datos",JSON.stringify(datos))
  }
  salirDeRuta():Observable<boolean> | boolean{
    if(!this.nombre && !this.apellido && !this.user && !this.pass || this.enviado){
      return true
    }
    const confirmar = confirm("¿Deseas salir del formulario? Perderás todos los cambios")
    console.log(confirmar)
    return confirmar
  }

}
