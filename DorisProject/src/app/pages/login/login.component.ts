/* tslint:disable:no-shadowed-variable */
import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ValidatingloginService} from '../../validatinglogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent {
  loginForm: FormGroup;
  subscription: any;
  name: string ;

//  isAuthenticate: boolean;

  constructor(private formBuilder: FormBuilder,
              private  router: Router,
              private ValidatingloginService: ValidatingloginService) {

    this.loginForm = this.formBuilder.group({
      rut: ['11.111.111-1', [Validators.required, Validators.minLength(9)]],
      contrasena: ['1234', [Validators.required, Validators.minLength(4)]]
    });

  }


  get rutValid() {
    return this.loginForm.get('rut').invalid && this.loginForm.get('rut').touched;
  }

  get passwordValid() {
    return this.loginForm.get('contrasena').invalid && this.loginForm.get('contrasena').touched;
  }


  login() {
    const user = {rut: this.loginForm.get('rut').value, password: this.loginForm.get('contrasena').value};
    this.ValidatingloginService.login(user).subscribe(data => {

      if (data.valid === true) {

        this.ValidatingloginService.isAuthenticate = true;
        this.router.navigate(['stock']);
        this.name = data.username;
        window.localStorage.setItem('username', this.name);
        window.localStorage.setItem('logok', data.valid)
        return this.name;

      } else {
        this.ValidatingloginService.isAuthenticate = false;
        this.router.navigate(['login']);
        this.loginForm.reset();
        this.loginForm.markAllAsTouched();
        return this.ValidatingloginService.isAuthenticate;
      }
    });
  }
}

