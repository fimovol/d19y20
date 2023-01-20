import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private autentificacion:AutenticacionService,
    private router:Router,private formbuilder:FormBuilder) { }
  registroform = this.formbuilder.group({
    usuario: ['',{
      validators:[
        Validators.required,
        Validators.email
      ]
    }],
    password: ['',{
      validators:[
        Validators.required,
        Validators.minLength(6)
      ]
    }],
  })
  get usuario(){return this.registroform.get('usuario')}
  get password(){return this.registroform.get('password')}
  urlRedireccion = ""
  ngOnInit(): void {
  }
  login(){
    this.autentificacion.login()
    this.urlRedireccion = this.autentificacion.urlUsuarioIntentaAcceder
    this.autentificacion.urlUsuarioIntentaAcceder = ''
    this.router.navigate([this.urlRedireccion])
  }
}
