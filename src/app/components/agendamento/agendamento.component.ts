import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="container">
      <div class="form-card">
        <h2>Realizar Agendamento</h2>

        <label>Modalidade:</label>
        <select [(ngModel)]="agendamento.modalidade" class="input">
          <option value="Futebol">Futebol</option>
          <option value="Vôlei">Vôlei</option>
          <option value="Beach Tennis">Beach Tennis</option>
        </select>

        <label>Data e Hora:</label>
        <input type="datetime-local" [(ngModel)]="agendamento.data" class="input">

        <div class="checkbox-group">
          <input type="checkbox" [(ngModel)]="agendamento.alugarEquipamento" id="equip">
          <label for="equip">Desejo alugar equipamentos (+ R$ 20,00)</label>
        </div>

        <label>Forma de Pagamento:</label>
        <select [(ngModel)]="agendamento.pagamento" class="input">
          <option value="pix">PIX</option>
          <option value="cartao">Cartão de Crédito</option>
          <option value="dinheiro">Dinheiro</option>
        </select>

        <button type="button" class="btn-agendar" (click)="confirmarAgendamento()">
          Confirmar Agendamento
        </button>
      </div>
    </div>
  `,
  styles: [`
    .container { padding: 40px; display: flex; justify-content: center; background: #f8fafc; min-height: 100vh; }
    .form-card { background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); width: 100%; max-width: 400px; }
    .input { width: 100%; padding: 12px; margin: 10px 0 20px 0; border: 1px solid #ddd; border-radius: 6px; }
    .checkbox-group { margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
    .btn-agendar { width: 100%; padding: 15px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }
  `]
})
export class AgendamentoComponent {
  // Inicializamos com valores padrão
  agendamento = {
    modalidade: 'Futebol',
    data: '',
    alugarEquipamento: false,
    pagamento: 'pix'
  };

  constructor(private router: Router) {}

  confirmarAgendamento() {
    if (!this.agendamento.data) {
      alert('Selecione uma data e hora!');
      return;
    }

    // Simulação do envio dos dados
    console.log('Dados do agendamento:', this.agendamento);

    alert(`Agendamento realizado via ${this.agendamento.pagamento.toUpperCase()}!`);

    this.router.navigate(['/home']);
  }
}
