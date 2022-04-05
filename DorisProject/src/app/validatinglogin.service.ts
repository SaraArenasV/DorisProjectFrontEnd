<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
=======
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
>>>>>>> development

@Injectable({
  providedIn: 'root'
})
export class ValidatingloginService {
<<<<<<< HEAD
  constructor(private http: HttpClient) { 
=======
  constructor(private http: HttpClient) {
>>>>>>> development
  }


  login(user: any): Observable<any> {
    return this.http.post('https://dorisprojectbackend-dev.herokuapp.com/api/v1/userValidation', user);
  }
<<<<<<< HEAD
     
=======

>>>>>>> development

}
