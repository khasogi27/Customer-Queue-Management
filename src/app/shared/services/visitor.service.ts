import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Visitor } from '../interfaces/visitor';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(private http: HttpClient) { }

  getVisitors(): Observable <Visitor[]> {
    return this.http.get<Visitor[]>(environment.baseUrl + '/visitors');
  }
}
