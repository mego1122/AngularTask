import { SecurityService } from './../Services/security.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AppUserAuth } from '../Models/app-user-auth';
import { Router, ActivatedRoute } from '@angular/router';
import { AppUser } from '../Models/app-user';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
    ,
    FormsModule
  ]  
})
export class LoginModule {  
  }