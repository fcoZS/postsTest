import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {LoginComponent} from "./features/login/login.component";
import {AuthGuard} from "./auth-guard.service";


const routes: Routes = [
  {
    path: '/home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '/login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
