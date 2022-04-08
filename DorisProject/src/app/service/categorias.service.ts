import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategory() : Observable <any>{
    const url = `${environment.apiDoris}${environment.getCategoryList}` ;
    return this.http.get(url);
    
  }

  save(category: any)  : Observable <any>{
    const url = `${environment.apiDoris}${environment.saveCategory}` ;
    return this.http.post(url, category);
  }
}
