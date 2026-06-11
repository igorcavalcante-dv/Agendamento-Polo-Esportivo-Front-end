import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="cadastro-container">
      <div class="cadastro-card">
        <div class="cadastro-header">
          <h2>Criar Conta</h2>
          <p>Selecione o seu perfil e preencha os dados abaixo</p>
        </div>

        <div class="perfil-selector">
          <button
            type="button"
            [class.active]="tipoPerfil === 'CLIENTE'"
            (click)="mudarPerfil('CLIENTE')">
            🙋‍♂️ Sou Jogador
          </button>
          <button
            type="button"
            [class.active]="tipoPerfil === 'ADMIN'"
            (click)="mudarPerfil('ADMIN')">
            🏟️ Sou Dono de Arena
          </button>
        </div>

        <div *ngIf="erroMensagem" class="alert-error">
          {{ erroMensagem }}
        </div>

        <form (ngSubmit)="onCadastro()" #cadastroForm="ngForm">

          <div class="input-group">
            <label for="nome">
              {{ tipoPerfil === 'CLIENTE' ? 'Nome Completo' : 'Nome do Responsável' }}
            </label>
            <input type="text" id="nome" name="nome" [(ngModel)]="dadosCadastro.nome" required placeholder="Digite o nome completo">
          </div>

          <div *ngIf="tipoPerfil === 'ADMIN'" class="admin-fields-animation">
            <div class="input-group">
              <label for="nomeArena">Nome da Arena / Complexo</label>
              <input type="text" id="nomeArena" name="nomeArena" [(ngModel)]="dadosCadastro.nomeArena" required placeholder="Ex: Polo Esportivo Centro">
            </div>

            <div class="input-group">
              <label for="cnpj">CNPJ da Empresa</label>
              <input type="text" id="cnpj" name="cnpj" [(ngModel)]="dadosCadastro.cnpj" required placeholder="00.000.000/0001-00">
            </div>
          </div>

          <div class="input-group">
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" [(ngModel)]="dadosCadastro.email" required placeholder="seu@email.com">
          </div>

          <div class="input-group">
            <label for="telefone">Telefone / WhatsApp</label>
            <input type="tel" id="telefone" name="telefone" [(ngModel)]="dadosCadastro.telefone" required placeholder="(00) 90000-0000">
          </div>

          <div class="input-group">
            <label for="senha">Senha</label>
            <input type="password" id="senha" name="senha" [(ngModel)]="dadosCadastro.senha" required placeholder="Crie uma senha segura">
          </div>

          <div class="input-group">
            <label for="confirmarSenha">Confirmar Senha</label>
            <input type="password" id="confirmarSenha" name="confirmarSenha" [(ngModel)]="dadosCadastro.confirmarSenha" required placeholder="Repita a senha">
          </div>

          <button type="submit" class="btn-submit" [disabled]="!cadastroForm.form.valid">
            {{ tipoPerfil === 'CLIENTE' ? 'Finalizar Cadastro' : 'Cadastrar Minha Arena' }}
          </button>
        </form>

        <div class="cadastro-footer">
          <p>Já tem uma conta? <a routerLink="/login">Faça Login</a></p>
          <a routerLink="/" class="back-link">← Voltar ao início</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  tipoPerfil: 'CLIENTE' | 'ADMIN' = 'CLIENTE';

  dadosCadastro = {
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: '',
    nomeArena: '',
    cnpj: ''
  };

  erroMensagem: string = '';

  constructor(private router: Router) {}

  mudarPerfil(perfil: 'CLIENTE' | 'ADMIN') {
    this.tipoPerfil = perfil;
    this.erroMensagem = '';
    if (perfil === 'CLIENTE') {
      this.dadosCadastro.nomeArena = '';
      this.dadosCadastro.cnpj = '';
    }
  }

  onCadastro() {
    this.erroMensagem = '';

    if (this.dadosCadastro.senha !== this.dadosCadastro.confirmarSenha) {
      this.erroMensagem = 'As senhas não coincidem. Verifique e tente novamente!';
      return;
    }

    const cadastroPayload = {
      nome: this.dadosCadastro.nome.trim(),
      email: this.dadosCadastro.email.toLowerCase().trim(),
      telefone: this.dadosCadastro.telefone.trim(),
      senha: this.dadosCadastro.senha,
      perfil: this.tipoPerfil,
      nomeArena: this.tipoPerfil === 'ADMIN' ? this.dadosCadastro.nomeArena.trim() : null,
      cnpj: this.tipoPerfil === 'ADMIN' ? this.dadosCadastro.cnpj.trim() : null
    };

    console.log('Objeto pronto para o Spring Boot:', cadastroPayload);

    alert(`Cadastro de ${this.tipoPerfil === 'CLIENTE' ? 'Jogador' : 'Arena'} realizado com sucesso!`);
    this.router.navigate(['/login']);
  }
}
