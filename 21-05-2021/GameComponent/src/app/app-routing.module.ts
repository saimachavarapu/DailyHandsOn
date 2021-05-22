import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import {​​​​​ AddemployeeComponent }​​​​​ from'./employee/addemployee/addemployee.component';
import {​​​​​ EmployeeComponent }​​​​​ from'./employee/employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: '', component: UserComponent}, 
  {path:'add-user', component: AdduserComponent},
  {path: 'update-user', component: UpdateUserComponent}
  
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
exports:[RouterModule]

})
export class AppRoutingModule { }
