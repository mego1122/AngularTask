import { UserService } from './../../Services/user.service';
import { registerUser } from './../../Models/registerUser';
import { user } from './../../Models/user';
import { NgModule } from '@angular/core';
import { SecurityService } from './../../Services/security.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  myid:string=null;

    
    user:registerUser; 
    myuser:registerUser
    = {
    id:null,
    email: null,
    password: null,
    confirmPassword: null,
    fullName:null,
    birthDate:null,
    gender:null,
    age:0
  };



  constructor( private SecurityService: SecurityService
    ,private UserService:UserService
    , private route: ActivatedRoute) 
    {}

  ngOnInit() {
   this.myid= localStorage.getItem("id2");
    if( this.myid != null)
    {
     
      this.UserService.getUser( this.myid).subscribe(x=>{this.user=x
      
      });
      localStorage.setItem("id2",null);
      
    }
    else{this.user.id=null;}
  
  }



  save() {   

    this.myuser={
      email:this.user.email,
      password:this.user.password,
      confirmPassword:this.user.confirmPassword,
      fullName:this.user.fullName,
      age:this.user.age,
      gender:this.user.gender,
      birthDate:this.user.birthDate
        }


      if(this.user.id!=null)
     {

       this.UserService.updateUser(this.myuser).subscribe(x=>console.log(x));
     }
    else
     {
        this.SecurityService.register(this.myuser).subscribe(
        u => {}, error => {   } ) ;
     }
}



}
