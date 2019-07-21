import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/employees';
import { EmployeesService } from '../service/employees/employees.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  employees: Employees[];

  constructor(private es: EmployeesService) { }

  ngOnInit(): void {
    this.es.getRegisters().subscribe(
      dados => this.employees = dados
    );
  }

}
