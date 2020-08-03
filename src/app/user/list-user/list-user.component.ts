import { registerUser } from './../../Models/registerUser';
import { AppUser } from './../../Models/app-user';
import { UserService } from './../../Services/user.service';
import { user } from './../../Models/user';
import { Component, OnInit } from '@angular/core';
import { AppUserAuth } from 'src/app/Models/app-user-auth';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/Services/security.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: registerUser[]=null;
  securityObject: AppUserAuth = null;

  constructor(private userService: UserService,
    private router: Router,
    private securityService: SecurityService) {
      this.securityObject = this.securityService.securityObject;
    }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService.getUsers()
      .subscribe(u=>{ 
       
        this.users = u
      
      });
  }

  addUser(): void {
    this.router.navigateByUrl('/adduser');
  }


  updateUser(id:string): void {
   localStorage.setItem("id2",id);
    this.router.navigateByUrl('/adduser');
}
  
  deleteUser(id: string): void {
    if (confirm('Delete this user?')) {
         this.userService.deleteUser(id)
        .subscribe(u => this.users = this.users.filter(p => p.id !== id));
       
      }
      this.router.navigateByUrl('/user');
  }
}