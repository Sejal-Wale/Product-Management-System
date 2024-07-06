
// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // getAllProducts() {
  //   throw new Error('Method not implemented.');
  // }
  private baseUrl = 'https://ops.cloud.leadtorev.com/product-catalog';

  constructor(private http: HttpClient) {}

  createProduct(product: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, product);
  }

  updateProduct(id: string, product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, { id, ...product });
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/all`);
    // return this.http.get(`${GET /product-catalog/get/by-id}` );

  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete`, { params: { id } });
  }

  

}







