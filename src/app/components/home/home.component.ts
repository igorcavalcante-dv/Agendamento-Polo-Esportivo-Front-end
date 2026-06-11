import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeatureCardComponent } from '../feature-card/feature-card.component';

interface Esporte {
  nome: string;
  icone: string;
  preco: number;
  descricao: string;
}

interface Arena {
  id: number;
  nome: string;
  esportes: Esporte[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FeatureCardComponent],
  template: `
    <div class="home-container">
      <header class="home-header">
        <h1>Painel de Agendamentos</h1>
        <p>Encontre espaços e reserve seu horário para jogar</p>
      </header>

      <section class="features-grid">
        <app-feature-card
          icone="⚡"
          titulo="Agendamento Instantâneo"
          descricao="Reserve a sua quadra favorita em menos de 1 minuto sem precisar ligar para o local.">
        </app-feature-card>

        <app-feature-card
          icone="📊"
          titulo="Gestão Completa"
          descricao="Para donos de arenas: controle horários, mensalistas e pagamentos em um só lugar.">
        </app-feature-card>

        <app-feature-card
          icone="📅"
          titulo="Histórico Confiável"
          descricao="Acompanhe seus jogos agendados, confirme presença e evite conflitos de horários.">
        </app-feature-card>
      </section>

      <div class="busca-section">
        <h2>Onde você quer jogar hoje?</h2>
        <div class="input-group-home">
          <label for="arenaSelect">Selecione uma Arena Disponível</label>
          <select id="arenaSelect" [(ngModel)]="arenaSelecionadaId" (change)="onArenaChange()">
            <option [value]="0">Escolha um espaço...</option>
            <option *ngFor="let arena of listaArenas" [value]="arena.id">{{ arena.nome }}</option>
          </select>
        </div>
      </div>

      <div class="esportes-section" *ngIf="arenaSelecionada">
        <h3>Modalidades Disponíveis em: <span>{{ arenaSelecionada.nome }}</span></h3>
        <p class="info-banco">Exibindo esportes cadastrados pelo proprietário deste espaço no sistema.</p>

        <div class="grid-esportes">
          <div class="card-esporte" *ngFor="let esporte of arenaSelecionada.esportes">
            <div class="esporte-icone">{{ esporte.icone }}</div>
            <h4>{{ esporte.nome }}</h4>
            <p>{{ esporte.descricao }}</p>
            <div class="esporte-preco">R$ {{ esporte.preco.toFixed(2) }} / hora</div>
            <button
              [routerLink]="['/agendamento']"
              [queryParams]="{ polo: arenaSelecionada.nome, esporte: esporte.nome, preco: esporte.preco }"
              class="btn-agendar">
              Agendar Horário
            </button>
          </div>
        </div>
      </div>

    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  arenaSelecionadaId: number = 0;
  arenaSelecionada: Arena | null = null;

  listaArenas: Arena[] = [
    {
      id: 1,
      nome: 'Polo Esportivo Centro',
      esportes: [
        { nome: 'Futsal', icone: '⚽', preco: 90.00, descricao: 'Quadra de saibro coberta com iluminação de LED.' },
        { nome: 'Tênis', icone: '🎾', preco: 120.00, descricao: 'Quadra rápida oficial com medidas de torneio.' }
      ]
    },
    {
      id: 2,
      nome: 'Arena Beach & Sol',
      esportes: [
        { nome: 'Beach Tennis', icone: '🏖️', preco: 70.00, descricao: 'Quadra de areia fina ideal para treinos e torneios.' },
        { nome: 'Futevôlei', icone: '🏐', preco: 60.00, descricao: 'Rede oficial com regulagem de altura automática.' }
      ]
    },
    {
      id: 3,
      nome: 'Complexo Esportivo Zona Norte',
      esportes: [
        { nome: 'Futsal', icone: '⚽', preco: 85.00, descricao: 'Piso vinílico de alta aderência, arquibancada para torcida.' },
        { nome: 'Vôlei de Quadra', icone: '🏐', preco: 80.00, descricao: 'Quadra poliesportiva equipada para jogos amadores.' },
        { nome: 'Tênis', icone: '🎾', preco: 110.00, descricao: 'Quadra de saibro tradicional descoberta.' }
      ]
    }
  ];

  onArenaChange() {
    const id = Number(this.arenaSelecionadaId);
    const encontrada = this.listaArenas.find(a => a.id === id);
    this.arenaSelecionada = encontrada ? encontrada : null;
  }
}
