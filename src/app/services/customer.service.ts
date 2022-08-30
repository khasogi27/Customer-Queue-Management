import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Customer } from '../interfaces/customer';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable <Customer[]> {
    return this.http.get<Customer[]>(environment.baseUrl + '/customer');
  }

  getCustomer(id: string): Observable <Customer[]> {
    return this.http.get<Customer[]>(environment.baseUrl + '/customer/' + id);
  }

  postCustomer(form: any): Observable <Customer[]> {
    return this.http.get<Customer[]>(environment.baseUrl + '/customer/' + form);
  }

  deleteCustomer(id: string): Observable <Customer[]> {
    return this.http.get<Customer[]>(environment.baseUrl + '/customer/' + id);
  }
}
