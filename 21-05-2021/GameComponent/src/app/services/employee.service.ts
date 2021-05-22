import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EMPLOYEES } from '../employee-mock';
import { EmployeeComponent } from '../employee/employee.component';
import {EmployeesComponent } from '../model/model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 baseUrl ='http://localhost:3000/employees';
  constructor(private httpClient: HttpClient) { }
  getAllEmployees(): Observable<EmployeesComponent[]>{
    return this.httpClient.get<EmployeesComponent[]>(this.baseUrl);
  }
  createEmployee(employee: EmployeesComponent): Observable<EmployeesComponent> {
    return this.httpClient.post<EmployeesComponent>(this.baseUrl, employee);    
  }
  getEmployeeById(id: number) : Observable<EmployeesComponent> {
    return this.httpClient.get<EmployeesComponent>(this.baseUrl+ '/'+id);

  }

  deleteEmployeeById(id: number): Observable<EmployeesComponent> {
    return this.httpClient.delete<EmployeesComponent>(this.baseUrl + '/' +id);
  }

  updateEmployee(employee: EmployeesComponent): Observable<EmployeesComponent> {
    return this.httpClient.put<EmployeesComponent>(this.baseUrl+ '/'+ employee.id, employee);
  }
}
