import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from 'src/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private API = "http://localhost:3000/employees";

  constructor(private http: HttpClient) { }

  getRegisters() {
    return this.http.get<Employees[]>(this.API);
  }
}
