import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from 'src/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:4200/employees";

  getRegisters() {
    return this.http.get<Employees[]>(this.url);
  }
}
