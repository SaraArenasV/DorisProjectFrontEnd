import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidatingloginService {
  constructor(private http: HttpClient) {
  }


  login(user: any): Observable<any> {
    return this.http.post('https://dorisprojectbackend-dev.herokuapp.com/api/v1/userValidation', user);
  }

}
