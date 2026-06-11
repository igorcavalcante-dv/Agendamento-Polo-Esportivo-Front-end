import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <h2>Acesso Administrativo</h2>
        <form (ngSubmit)="onAdminSubmit()">
          <div class="input-group">
            <label>Usuário Admin</label>
            <input type="text" [(ngModel)]="admin.user" name="user" required>
          </div>
          <div class="input-group">
            <label>Senha</label>
            <input type="password" [(ngModel)]="admin.pass" name="pass" required>
          </div>
          <button type="submit" class="btn-submit">Entrar no Painel</button>
        </form>
        <p><a href="/login">Voltar para Login de Cliente</a></p>
      </div>
    </div>
  `,
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  admin = { user: '', pass: '' };
  constructor(private router: Router) {}

  onAdminSubmit() {
    this.router.navigate(['/dashboard-admin']);
  }
}
