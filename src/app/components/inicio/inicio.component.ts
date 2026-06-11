import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent],
  template: `
    <div class="landing-container">
      <main class="hero-section">
        <div class="hero-content">
          <div class="logo-icon">🏟️</div>
          <h1>Polo Esportivo</h1>
          <p class="subtitle">A plataforma inteligente para agendamento de quadras de Futsal, Tênis e Beach Tennis.</p>

          <div class="action-buttons">
            <a routerLink="/login" class="btn-primary-custom">Entrar na Conta</a>
            <a routerLink="/cadastro" class="btn-secondary-custom">Criar Cadastro</a>
          </div>
        </div>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .landing-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      font-family: system-ui, -apple-system, sans-serif;
    }
    .hero-section {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 20px;
      text-align: center;
    }
    .hero-content { max-width: 600px; }
    .logo-icon { font-size: 4rem; margin-bottom: 20px; }
    h1 {
      color: #ffffff;
      font-size: 3rem;
      font-weight: 800;
      margin: 0 0 16px 0;
    }
    .subtitle {
      color: #94a3b8;
      font-size: 1.2rem;
      line-height: 1.6;
      margin: 0 0 40px 0;
    }
    .action-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
    .btn-primary-custom {
      background-color: #2563eb;
      color: #ffffff;
      padding: 14px 28px;
      border-radius: 8px;
      font-weight: 600;
      text-decoration: none;
      transition: background-color 0.2s;
    }
    .btn-primary-custom:hover { background-color: #1d4ed8; }
    .btn-secondary-custom {
      background-color: transparent;
      color: #ffffff;
      padding: 14px 28px;
      border-radius: 8px;
      font-weight: 600;
      text-decoration: none;
      border: 2px solid #475569;
      transition: all 0.2s;
    }
    .btn-secondary-custom:hover { background-color: #475569; }
  `]
})
export class InicioComponent {}
