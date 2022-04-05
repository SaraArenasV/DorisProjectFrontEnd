import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidatingloginService {
  constructor(private http: HttpClient) {
  }


  login(user: any): Observable<any> {
    const url = `${environment.apiDoris}${environment.login}`;
    return this.http.post(url, user);
  }


}
