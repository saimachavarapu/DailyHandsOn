import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../model/users';
import { UserservicesService } from '../services/userservices.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    
users: Users[];
constructor(private userService: UserservicesService, private router: Router) {​​​​​ }​​​​​
ngOnInit(): void {​​​​​
this.userService.getAllUsers().subscribe(data=> {​​​​​
this.users=data;
console.log(this.users.forEach(e=>e));
    }​​​​​);
  }​​​​​
deleteUser(user: Users): void {​​​​​
console.log(user);
this.userService.deleteUserById(user["id"]).subscribe();
this.users=this.users.filter(e=>e !==user);
  }​​​​​
updateUser(user: Users): void {​​​​​
localStorage.removeItem('id');
localStorage.setItem('id', user.id.toString());
this.router.navigate(['update-user']);
  }​​​​​


}
