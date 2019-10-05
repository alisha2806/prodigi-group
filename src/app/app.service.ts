import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products/products.model';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  public userData: Product[] = [];

  public BASE_URL = 'https://5d03b0fbd1471e00149baf00.mockapi.io';


  constructor(private http: HttpClient) { }
  public getProducts(): Observable<any> {
    return this.http.get(this.BASE_URL + '/products');
    
  }
  public getMoreProducts(id): Observable<any> {
    return this.http.get(this.BASE_URL + '/products/'+id);

  }
}
