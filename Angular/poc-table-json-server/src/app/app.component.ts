import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './service/employees/employees.service';
import { Employees } from 'src/employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'poc-table-json-server';

  constructor(private es : EmployeesService) {}

  columns = ['Id', 'First Name', 'Last Name', 'Email'];

  index = ['id', 'firstName', 'lastName', 'email'];

  employees : Employees[] = [];

  ngOnInit(): void {
    this.es.getRegisters().subscribe(
      (response) => {
        this.employees = response;
      },
      (error) => {
        console.log ("Erro");
      }
    )
  }
}
