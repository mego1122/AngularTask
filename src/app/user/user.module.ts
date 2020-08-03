import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [UserComponent, ListUserComponent, AddUserComponent, ],
  imports: [
    CommonModule,
    UserRoutingModule,
    
    FormsModule
  ]
})
export class UserModule { }
