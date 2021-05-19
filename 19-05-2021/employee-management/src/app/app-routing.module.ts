import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import {​​​​​ AddemployeeComponent }​​​​​ from'./employee/addemployee/addemployee.component';
import {​​​​​ EmployeeComponent }​​​​​ from'./employee/employee.component';


const routes: Routes = [
  {path: '', component: EmployeeComponent}, 
  {path:'addemployee', component: AddemployeeComponent}
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
