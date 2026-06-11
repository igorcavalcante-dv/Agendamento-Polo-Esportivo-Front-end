import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginAdminComponent } from './components/LoginAdmin/login-admin.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import {CadastroComponent} from './components/Cadrastro/cadastro.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent },
  { path: '**', redirectTo: 'login' }
];
