import { userResponse } from './../Models/userResponse';
import { registerUser } from './../Models/registerUser';
import { AppUserAuth } from './../Models/app-user-auth';
import { AppUser } from './../Models/app-user'
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators/';

import { Injectable } from '@angular/core';
import { user } from '../Models/user';



const API_URL = 'https://localhost:44319/api/Auth/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class SecurityService {
  securityObject: AppUserAuth = new AppUserAuth();
  constructor(private http: HttpClient) { }

  logout(): void {
    this.isAuhenticatioSubject.next(false);
    this.resetSecurityObject();
  }

  resetSecurityObject(): void {
    this.securityObject.userName = '';
    this.securityObject.bearerToken = '';
    this.securityObject.isAuthenticated = false;

  
    localStorage.removeItem('bearerToken');
  }

  private isAuhenticatioSubject=new Subject<boolean>();

  getIsAuthenticated():Observable<boolean>{
  return this.isAuhenticatioSubject.asObservable();
  }
 
  
 
  register(usr:registerUser):Observable<registerUser>{
    
      
    return this.http.post<registerUser>(API_URL + 'Register',usr, httpOptions);
  }

  login(entity: AppUser): Observable<AppUserAuth> {
    // Initialize security object
    this.resetSecurityObject();

    return this.http.post<AppUserAuth>(API_URL + 'Login',
      entity, httpOptions).pipe(
        tap(resp => {
          // Use object assign to update the current object
          // NOTE: Don't create a new AppUserAuth object
          // because that destroys all references to the object

          this.isAuhenticatioSubject.next(true);
          Object.assign(this.securityObject, resp);
          // store token into local storage
          localStorage.setItem('bearerToken', this.securityObject.bearerToken);
        }));
  }
}