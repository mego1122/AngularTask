import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators/';
import { AppUserAuth } from 'src/Models/app-user-auth';
import { AppUser } from 'src/Models/app-user';
import { Injectable } from '@angular/core';


const API_URL = 'http://localhost:5000/api/security/';

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
    this.resetSecurityObject();
  }

  resetSecurityObject(): void {
    this.securityObject.userName = '';
    this.securityObject.bearerToken = '';
    this.securityObject.isAuthenticated = false;

    this.securityObject.canAccessProducts = false;
    this.securityObject.canAddProduct = false;
    this.securityObject.canSaveProduct = false;
    this.securityObject.canAccessCategories = false;
    this.securityObject.canAddCategory = false;

    localStorage.removeItem('bearerToken');
  }

  login(entity: AppUser): Observable<AppUserAuth> {
    // Initialize security object
    this.resetSecurityObject();

    return this.http.post<AppUserAuth>(API_URL + 'login',
      entity, httpOptions).pipe(
        tap(resp => {
          // Use object assign to update the current object
          // NOTE: Don't create a new AppUserAuth object
          // because that destroys all references to the object
          Object.assign(this.securityObject, resp);
          // store token into local storage
          localStorage.setItem('bearerToken', this.securityObject.bearerToken);
        }));
  }
}