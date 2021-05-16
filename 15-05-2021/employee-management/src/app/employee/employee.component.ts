import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../employee-mock';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees=EMPLOYEES;
employee= { name: 'sai', age: 22, address: 'Machilipatnam'}
  constructor() { }

  ngOnInit(): void {
  }

}
