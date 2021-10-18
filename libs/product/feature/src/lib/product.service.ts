import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { 
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }
}
