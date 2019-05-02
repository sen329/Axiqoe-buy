import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule }    from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { ListofapprovalComponent } from './listofapproval/listofapproval.component';
import { SalesService } from './sales.service';
import { ProductsService } from './products.service';
import { ProductspageComponent } from './productspage/productspage.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    ListofapprovalComponent,
    ProductspageComponent,
    ProjectdetailComponent,
    ProductdetailsComponent,
    ProductcreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200'],
        blacklistedRoutes: [
          'localhost:4200/login',
          'localhost:4200/register']
      }
    })
  ],
  providers: [
    AuthService,
    SalesService,
    ProductsService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
