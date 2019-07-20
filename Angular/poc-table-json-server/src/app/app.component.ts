import { Component } from '@angular/core';
import { EmployeesService } from './service/employees/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc-table-json-server';

  constructor(private es : EmployeesService) {
    
  }
}
