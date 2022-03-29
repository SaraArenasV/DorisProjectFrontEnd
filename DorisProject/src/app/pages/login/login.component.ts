import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

usuario={
  rut:'',
  contrasena:''
}

  constructor() { }

  ngOnInit(): void {
  }


entrar( forma:NgForm){

if (forma.invalid) {
  Object.values(forma.controls).forEach(control=>{
    control.markAllAsTouched();
  })

}

  
}

}
