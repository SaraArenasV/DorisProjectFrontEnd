import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) { }

    
  getSotck(): Observable<any> {
    const url = `${environment.apiDoris}${environment.getStock}`;
    return this.http.get(url);
  }
}
