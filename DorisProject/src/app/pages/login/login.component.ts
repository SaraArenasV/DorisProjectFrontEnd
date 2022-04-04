import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatingloginService } from "./../../validatinglogin.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  subscription: any;

  constructor(private formBuilder: FormBuilder, 
              private  router:Router,
              private ValidatingloginService:ValidatingloginService) {

    this.loginForm = this.formBuilder.group({
      rut: ['', [Validators.required, Validators.minLength(9)]],
      contrasena: ['', [Validators.required, Validators.minLength(4)]]
    });
  }


  get rutValid(){
    return this.loginForm.get('rut').invalid&&this.loginForm.get('rut').touched
  }

  get passwordValid(){
    return this.loginForm.get('contrasena').invalid&&this.loginForm.get('contrasena').touched
  }



login(){
  const user={rut:this.loginForm.get('rut').value,  password:this.loginForm.get('contrasena').value};
  this.ValidatingloginService.login(user).subscribe(data=>{
    console.log(data);
    if (data) {
      this.router.navigate(['categorias']);
    } else{
      this.router.navigate(['login']);
      this.loginForm.markAllAsTouched
    }
  })
}

/*   login() {
    console.log('llegue hasta aquí')
    console.log(this.loginForm.get('rut').value)
    console.log(this.loginForm.get('contrasena').value)
    let res = this.ValidatingloginService.login(this.loginForm.get('rut').value, this.loginForm.get('contrasena').value)
    console.log('esta debiese ser la respuesta'+ res)
    if (res) {
      this.router.navigate(['categorias']);
    } else{
      this.router.navigate(['login']);
      this.loginForm.markAllAsTouched
    }
      
} */

  }
