import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import {LoginAdminComponent} from './components/LoginAdmin/login-admin.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent },
  { path: '**', redirectTo: 'login' }
];
