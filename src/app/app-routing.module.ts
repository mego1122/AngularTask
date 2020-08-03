import { AddUserComponent } from './user/add-user/add-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AuthGuard } from './Services/auth.guard';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login/login-routing.module';

const routes: Routes =
     [
       { path: 'page1', loadChildren: () => import('./page1/page1.module').then(m => m.Page1Module),canActivate:[AuthGuard] }, 
       { path: 'page2', loadChildren: () => import('./page2/page2.module').then(m => m.Page2Module),canActivate:[AuthGuard] },
     { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
     { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) ,canActivate:[AuthGuard]},
     { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) ,canActivate:[AuthGuard]},
     {path:'userlist',component:ListUserComponent},
     {path:'adduser/:email',component:AddUserComponent},
     { path:'adduser',component : AddUserComponent}
     ]
@NgModule({
  imports: [RouterModule.forRoot(routes)
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
