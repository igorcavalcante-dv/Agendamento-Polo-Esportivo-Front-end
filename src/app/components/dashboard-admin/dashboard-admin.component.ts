import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="admin-panel">
      <section class="card">
        <h2>Configurar Espaço Esportivo</h2>
        <div class="form-grid">
          <input [(ngModel)]="espaco.nome" placeholder="Nome da Quadra" class="input">
          <input [(ngModel)]="espaco.modalidade" placeholder="Modalidade (ex: Futebol, Vôlei)" class="input">
          <input [(ngModel)]="espaco.valorEquipamento" type="number" placeholder="Valor Aluguel Equipamento (R$)" class="input">
          <input [(ngModel)]="espaco.valorHora" type="number" placeholder="Valor por hora (R$)" class="input">
        </div>
        <button class="btn-save" (click)="salvar()">Atualizar Configurações</button>
      </section>

      <section class="card">
        <h2>Agendamentos Recebidos</h2>
        <table class="table">
          <thead>
            <tr><th>Cliente</th><th>Data/Hora</th><th>Modalidade</th></tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of agendamentos">
              <td>{{ item.cliente }}</td>
              <td>{{ item.data }}</td>
              <td>{{ item.modalidade }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  `,
  styles: [`
    .admin-panel { padding: 30px; background: #f8fafc; min-height: 100vh; font-family: sans-serif; }
    .card { background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin-bottom: 25px; }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px; }
    .input { padding: 12px; border: 1px solid #e2e8f0; border-radius: 6px; width: 100%; box-sizing: border-box; }
    .btn-save { background: #2563eb; color: white; padding: 12px 25px; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }
    .table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    .table th, .table td { padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: left; }
  `]
})
export class DashboardAdminComponent {
  espaco = { nome: '', modalidade: '', valorEquipamento: 0, valorHora: 0 };

  // Lista simulada de agendamentos
  agendamentos = [
    { cliente: 'Carlos Silva', data: '12/06/2026 - 19:00', modalidade: 'Futebol' },
    { cliente: 'Ana Souza', data: '13/06/2026 - 10:00', modalidade: 'Vôlei' }
  ];

  salvar() {
    alert('Configurações atualizadas com sucesso!');
  }
}
