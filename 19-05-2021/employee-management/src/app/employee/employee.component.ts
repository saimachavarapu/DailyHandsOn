import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../employee-mock';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees=EMPLOYEES;
 employee= { name: 'sai', age: 22, address: 'Machilipatnam'}
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data =>{
      this.employees = data;
    });
    
    }
    
  }
