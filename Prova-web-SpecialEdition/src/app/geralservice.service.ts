import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class GeralserviceService {

  constructor(private http: HttpClient) { }


  getUser(id = 3) : Observable<any>{
    return this.http.get(`http://localhost:44316//api/Users/${id}`);
  }
  getFilterItem(input = 'Seocho-gu', date: string): Observable<any> {
    return this.http.get(`http://localhost:44316//Itens/Areas/${input}/${date}`)
  }


  requestAPITOKEN(body: any): Observable<any> {
    return this.http.post("http://localhost:5000/Payment/PaymentToken", body, { responseType: 'text' });
  }
  requestPagamento(body: any): Observable<any> {
    return this.http.post("http://localhost:5000/Payment/Pay", body, { responseType: 'text' });
  }
  requestGetInfo(token: string): Observable<any> {
    return this.http.get(`http://localhost:5000/Payment/GetInfo?token=${token}`);
  }


}
