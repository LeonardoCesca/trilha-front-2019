import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employees } from 'src/app/core/employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  getRegisters(): Observable<Employees[]> {
    return of ([]);
  }
}
