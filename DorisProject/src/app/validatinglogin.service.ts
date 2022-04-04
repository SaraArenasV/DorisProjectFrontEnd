import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidatingloginService {
  constructor(private http: HttpClient) { 
  }


  login(user: any): Observable<any> {
    return this.http.post('https://dorisprojectbackend-dev.herokuapp.com/api/v1/userValidation', user);
  }
      


/*   login(rut: string, password: string) {
    const UserModel={rut:rut, 
                mail:'',
                password:password,
                active:''}
    let valid 
    valid= this.http.post<string>('https://dorisprojectbackend-dev.herokuapp.com/api/v1/userValidation', { UserModel }).toPromise()
      console.log(valid)
      return valid;
       

}*/
}
