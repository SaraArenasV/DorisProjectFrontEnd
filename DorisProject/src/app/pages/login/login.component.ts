import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      rut: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
      contrasena: ['', [Validators.required, Validators.minLength(4)]]
    });
  }


  get rutValid(){
    return this.loginForm.get('rut').invalid&&this.loginForm.get('rut').touched
  }

  get passwordValid(){
    return this.loginForm.get('contrasena').invalid&&this.loginForm.get('contrasena').touched
  }

  login() {
    let userLogged = 'invalid_form';
    console.log('Valores del form --> ', this.loginForm.value);
    if(this.loginForm.valid) {
      if (this.loginForm.value.rut === '9999999-9' && this.loginForm.value.contrasena === '123456') {
        userLogged = 'login_valid';
      } else {
        userLogged = 'login_invalid';
      }
      console.log('Respuesta del servicio de login --> ', userLogged);
    }
    if (this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach(control=>{
        control.markAllAsTouched();
      })
    return userLogged;
  }
  }
}