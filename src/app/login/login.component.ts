import { Observable, Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { SecurityService } from './../Services/security.service';
import { AppUserAuth } from './../Models/app-user-auth';
import { AppUser } from './../Models/app-user';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    returnUrl: string;
    user: AppUser = new AppUser();
    securityObject: AppUserAuth = null;
  
    constructor(private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router) { }
  
    ngOnInit() {
      this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    }
  



   


    login() {
      this.securityService.login(this.user).subscribe(
        resp => {
     
          this.securityObject = resp;
          
          if (this.returnUrl) {
            this.router.navigateByUrl(this.returnUrl);
          }
          else{
            this.router.navigateByUrl('/home');
          }
        }, () => {
          // Initialize security object to display error message
          this.securityObject = new AppUserAuth();
        }
      );
    }}