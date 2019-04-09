import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListofapprovalComponent } from './listofapproval/listofapproval.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { ProductspageComponent } from './productspage/productspage.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'listofapproval', component: ListofapprovalComponent, canActivate: [AuthGuard] },
  { path: 'projectdetail/:id', component: ProjectdetailComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductspageComponent, canActivate: [AuthGuard]},
  { path: 'productdetail/:id', component: ProductdetailsComponent, canActivate: [AuthGuard]},
  { path: 'app-nav', component: NavComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
