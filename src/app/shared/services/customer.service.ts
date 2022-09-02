import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Customer } from '../interfaces/customer';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable <Customer[]> {
    return this.http.get<Customer[]>(environment.baseUrl + '/customers');
  }

  getCustomer(id: string): Observable <Customer[]> {
    return this.http.get<Customer[]>(environment.baseUrl + '/customers/' + id);
  }

  postCustomer(form: any): Observable <Customer[]> {
    return this.http.post<Customer[]>(environment.baseUrl + '/customers/', form);
  }

  putCustomer(form: any): Observable <Customer[]> {
    return this.http.put<Customer[]>(environment.baseUrl + '/customers/', form);
  }

  deleteCustomer(id: string): Observable <Customer[]> {
    return this.http.delete<Customer[]>(environment.baseUrl + '/customers/' + id);
  }
}
