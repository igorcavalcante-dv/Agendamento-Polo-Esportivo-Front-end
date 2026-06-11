import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="admin-container">
      <div class="admin-card">
        <h2>Acesso Admin</h2>
        <input [(ngModel)]="admin.user" placeholder="Usuário" class="input-field">
        <input [(ngModel)]="admin.pass" type="password" placeholder="Senha" class="input-field">
        <button class="btn-admin" (click)="logar()">Acessar Painel</button>
      </div>
    </div>
  `,
  styles: [`
    .admin-container { display: flex; align-items: center; justify-content: center; height: 100vh; background: #1e293b; }
    .admin-card { background: white; padding: 40px; border-radius: 12px; width: 300px; text-align: center; }
    .input-field { width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
    .btn-admin { width: 100%; padding: 10px; background: #0f172a; color: white; border: none; border-radius: 4px; cursor: pointer; }
  `]
})
export class LoginAdminComponent {
  admin = { user: '', pass: '' };
  constructor(private router: Router) {}
  logar() { this.router.navigate(['/dashboard-admin']); }
}
