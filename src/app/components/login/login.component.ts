import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <h1>Login Cliente</h1>
        <input [(ngModel)]="usuario.email" placeholder="Email" class="input-field">
        <input [(ngModel)]="usuario.senha" type="password" placeholder="Senha" class="input-field">

        <button class="btn btn-primary" (click)="fazerLogin()">Entrar</button>

        <div class="footer-links">
          <button class="btn-link" (click)="irPara('admin')">Acesso Administrador</button>
          <button class="btn-link" (click)="irPara('cadastro')">Cadastrar-se</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container { display: flex; align-items: center; justify-content: center; height: 100vh; background: #f0f2f5; }
    .auth-card { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); width: 300px; }
    .input-field { width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
    .btn { width: 100%; padding: 10px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
    .btn-primary { background: #2563eb; color: white; }
    .btn-link { background: none; border: none; color: #64748b; cursor: pointer; text-decoration: underline; display: block; width: 100%; margin-top: 10px; }
  `]
})
export class LoginComponent {
  usuario = { email: '', senha: '' };

  constructor(private router: Router) {}

  fazerLogin() {
    if (this.usuario.email && this.usuario.senha) {
      this.router.navigate(['/home']); // Só navega se preencher
    } else {
      alert('Preencha email e senha!');
    }
  }

  irPara(rota: string) {
    if (rota === 'admin') this.router.navigate(['/login-admin']);
    else this.router.navigate(['/cadastro']);
  }
}
