import { registerUser } from './../Models/registerUser';
import { user } from './../Models/user';
import { AppUser } from './../Models/app-user';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
  
const API_URL = "https://localhost:44319/api/Users/";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
 
  constructor(private http: HttpClient) { }

  getUsers(): Observable<registerUser[]> {
    return this.http.get<registerUser[]>(API_URL+'GetUsers');
  }

  getUser(id: string): Observable<registerUser> {
    return this.http.get<registerUser>(API_URL+'GetUser?id=' + id);
  }

 

  updateUser(entity: registerUser): Observable<any> {
    alert(entity);
    return this.http.put(API_URL+'/update', entity, httpOptions);
  }

  deleteUser(userName: string): Observable<user> {
    return this.http.delete<user>(API_URL+'Delete/'+  userName, httpOptions);
  }

}