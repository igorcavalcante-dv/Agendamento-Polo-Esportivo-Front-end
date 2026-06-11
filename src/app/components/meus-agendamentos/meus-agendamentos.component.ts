import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Agendamento {
  id: number;
  local: string;
  esporte: string;
  data: string;
  horario: string;
  valor: number;
  status: 'Confirmado' | 'Pendente' | 'Cancelado';
}

@Component({
  selector: 'app-meus-agendamentos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="meus-agendamentos-container">
      <header class="header-agendamentos">
        <div class="content-header">
          <h1>Meus Agendamentos</h1>
          <p>Gerencie suas partidas e acompanhe o status das suas reservas.</p>
        </div>
        <button routerLink="/home" class="btn-voltar">Voltar para Home</button>
      </header>

      <div class="lista-agendamentos">
        <div *ngIf="listaReservas.length === 0" class="vazio-state">
          <p>Você ainda não realizou nenhum agendamento.</p>
          <button routerLink="/home" class="btn-agendar-agora">Explorar Arenas</button>
        </div>

        <div class="card-reserva" *ngFor="let reserva of listaReservas">
          <div class="card-info">
            <span class="badge-status" [ngClass]="reserva.status.toLowerCase()">{{ reserva.status }}</span>
            <h3>{{ reserva.esporte }} — {{ reserva.local }}</h3>
            <div class="detalhes-linha">
              <p>📅 {{ reserva.data }}</p>
              <p>⏰ {{ reserva.horario }}</p>
              <p>💰 R$ {{ reserva.valor.toFixed(2) }}</p>
            </div>
          </div>
          <div class="card-acoes" *ngIf="reserva.status !== 'Cancelado'">
            <button class="btn-cancelar" (click)="cancelarReserva(reserva.id)">Cancelar Reserva</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class MeusAgendamentosComponent implements OnInit {
  listaReservas: Agendamento[] = [
    { id: 1, local: 'Polo Esportivo Centro', esporte: 'Futsal', data: '15/06/2026', horario: '19:00', valor: 90.00, status: 'Confirmado' },
    { id: 2, local: 'Arena Beach & Sol', esporte: 'Beach Tennis', data: '18/06/2026', horario: '16:00', valor: 85.00, status: 'Pendente' }
  ];

  ngOnInit() {}

  cancelarReserva(id: number) {
    if (confirm('Deseja realmente cancelar este agendamento?')) {
      this.listaReservas = this.listaReservas.map(reserva =>
        reserva.id === id ? { ...reserva, status: 'Cancelado' } : reserva
      );
      console.log('Status de agendamento deletado/atualizado no MySQL para ID:', id);
    }
  }
}
