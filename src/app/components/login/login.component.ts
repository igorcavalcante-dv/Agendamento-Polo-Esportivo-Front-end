import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <h2>Acessar Conta</h2>
          <p>Insira suas credenciais para acessar o Polo Esportivo</p>
        </div>

        <div *ngIf="erroMensagem" class="alert-error">
          {{ erroMensagem }}
        </div>

        <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
          <div class="input-group">
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" [(ngModel)]="dadosLogin.email" required placeholder="seu@email.com">
          </div>

          <div class="input-group">
            <label for="senha">Senha</label>
            <input type="password" id="senha" name="senha" [(ngModel)]="dadosLogin.senha" required placeholder="Sua senha">
          </div>

          <button type="submit" class="btn-submit" [disabled]="!loginForm.form.valid">Entrar</button>
        </form>

        <div class="login-info-badge">
          <span>Acesso único para Clientes e Empresas</span>
        </div>

        <div class="login-footer">
          <p>Não tem uma conta? <a routerLink="/cadastro">Cadastre-se</a></p>
          <a routerLink="/" class="back-link">← Voltar ao início</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  dadosLogin = {email: '', senha: ''};
  erroMensagem: string = '';

  constructor(private router: Router) {
  }

  onSubmit() {
    this.router.navigate(['/home']);
  }
}
