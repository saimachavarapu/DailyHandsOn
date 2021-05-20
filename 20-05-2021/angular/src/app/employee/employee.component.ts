import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPLOYEES } from '../employee-mock';
import { EmployeesComponent } from '../model/model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: EmployeesComponent[];
 
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data =>{
      this.employees = data;
    });
    
    }
    updateEmployee(employee: EmployeesComponent): void{
      localStorage.removeItem('id');
      localStorage.setItem('id', employee.id.toString());
       this.router.navigate(['update-employee'])
    }
    deleteEmployee(employee: EmployeesComponent): void {
      this.employeeService.deleteEmployeeById(employee.id).subscribe();
      this.employees=this.employees.filter(e=>e !== employee);
    }
  }
