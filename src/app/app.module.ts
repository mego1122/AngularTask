import { AuthGuard } from './Services/auth.guard';
import { SecurityService } from './Services/security.service';
import { LoginRoutingModule } from './login/login-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { FormsModule } from '@angular/forms';
import  '@angular/compiler'
import { from } from 'rxjs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';  
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    HttpClientModule,
    BsDatepickerModule,
    

  ],
  bootstrap: [AppComponent],
  providers: [SecurityService, AuthGuard]
})
export class AppModule { 

}
