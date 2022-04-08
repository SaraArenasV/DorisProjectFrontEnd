import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddStockService {
  constructor(private http: HttpClient) {
  }

  save(data: any): Observable<any> {
    const url = `${environment.apiDoris}${environment.saveProduct}`;
    return this.http.post(url, data);
  }

  getProductBysku(sku: any): Observable<any> {
    const url = `${environment.apiDoris}${environment.getProductSku}` + sku;
    return this.http.get(url, sku);
  }

  getCagetorys(): Observable<any> {
    const url = `${environment.apiDoris}${environment.getCategoryList}` ;
    return this.http.get(url);
  }

}
