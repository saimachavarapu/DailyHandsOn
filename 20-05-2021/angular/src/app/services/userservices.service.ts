import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  baseUrl ='http://localhost:8080/api/users';
  constructor(private httpClient: HttpClient) { }
  getAllUsers(): Observable<Users[]>{
    return this.httpClient.get<Users[]>(this.baseUrl);
  }
  createUser(employee: Users): Observable<Users> {
    return this.httpClient.post<Users>(this.baseUrl, employee);    
  }
  getEmployeeById(id: number) : Observable<Users> {
    return this.httpClient.get<Users>(this.baseUrl+ '/'+id);

  }

  deleteUserById(id: number): Observable<Users> {
    return this.httpClient.delete<Users>(this.baseUrl + '/' +id);
  }

  updateUser(employee: Users): Observable<Users> {
    return this.httpClient.put<Users>(this.baseUrl+ '/'+ employee.id, employee);
  }
}
