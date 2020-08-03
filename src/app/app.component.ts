
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { from } from 'rxjs';
import { AppUserAuth } from './Models/app-user-auth';
import { SecurityService } from './Services/security.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{



  isAuthenticated:boolean;
  title = 'TaskJWT';

  public listItems:Array<string>=['red','blue','green'];
selectedValue = "choose color";
  /**
   *
   */
  constructor(@Inject(DOCUMENT) private _document,private securityService: SecurityService ) {
    this.securityObject = securityService.securityObject;
    
  }
  ngOnInit(): void {
  this.securityService.getIsAuthenticated().subscribe(d=>{this.isAuthenticated=d;
  console.log(d);
  });
  }

  securityObject: AppUserAuth =null;
 
  logout(): void {
    this.securityService.logout();
  }

  changeSuit(e) {
    this._document.body.style.background = e.target.value;
  }
}
