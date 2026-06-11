import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="agendamento-container">
      <div class="agendamento-card">

        <div class="agendamento-header">
          <h2>Detalhes do Agendamento</h2>
          <p>Selecione o horário, equipamentos e forma de pagamento</p>
        </div>

        <form (ngSubmit)="confirmarAgendamento()" #agendamentoForm="ngForm">

          <div class="secao-form">
            <h3>1. Escolha a Data e Horário</h3>
            <div class="grid-duplo">
              <div class="input-group">
                <label for="data">Data</label>
                <input type="date" id="data" name="data" [(ngModel)]="dadosAgendamento.data" required (change)="calcularTotal()">
              </div>
              <div class="input-group">
                <label for="horario">Horário Disponível</label>
                <select id="horario" name="horario" [(ngModel)]="dadosAgendamento.horario" required>
                  <option value="">Selecione...</option>
                  <option *ngFor="let hora of horariosDisponiveis" [value]="hora">{{ hora }}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="secao-form">
            <h3>2. Aluguel de Equipamentos (Opcional)</h3>
            <div class="equipamentos-lista">
              <label class="checkbox-item">
                <input type="checkbox" name="alugarRaquete" [(ngModel)]="dadosAgendamento.alugarRaquete" (change)="calcularTotal()">
                <div class="checkbox-texto">
                  <span>Alugar Raquete / Taco</span>
                  <small>+ R$ 15,00</small>
                </div>
              </label>

              <label class="checkbox-item">
                <input type="checkbox" name="alugarBola" [(ngModel)]="dadosAgendamento.alugarBola" (change)="calcularTotal()">
                <div class="checkbox-texto">
                  <span>Alugar Bola / Peteca</span>
                  <small>+ R$ 10,00</small>
                </div>
              </label>
            </div>
          </div>

          <div class="secao-form">
            <h3>3. Forma de Pagamento</h3>
            <div class="pagamento-opcoes">
              <label class="radio-item">
                <input type="radio" name="formaPagamento" value="PIX" [(ngModel)]="dadosAgendamento.formaPagamento" required>
                <span>Pix (Aprovação imediata)</span>
              </label>
              <label class="radio-item">
                <input type="radio" name="formaPagamento" value="CARTAO" [(ngModel)]="dadosAgendamento.formaPagamento" required>
                <span>Cartão de Crédito / Débito</span>
              </label>
              <label class="radio-item">
                <input type="radio" name="formaPagamento" value="LOCAL" [(ngModel)]="dadosAgendamento.formaPagamento" required>
                <span>Pagar no Local da Arena</span>
              </label>
            </div>
          </div>

          <div class="resumo-valores">
            <div class="linha-resumo">
              <span>Valor Base da Quadra:</span>
              <span>R$ {{ valorQuadra.toFixed(2) }}</span>
            </div>
            <div class="linha-resumo" *ngIf="dadosAgendamento.alugarRaquete || dadosAgendamento.alugarBola">
              <span>Aluguel de Equipamentos:</span>
              <span>R$ {{ valorEquipamentos.toFixed(2) }}</span>
            </div>
            <div class="linha-total">
              <span>Valor Total:</span>
              <span>R$ {{ valorTotal.toFixed(2) }}</span>
            </div>
          </div>

          <button type="submit" class="btn-submit" [disabled]="!agendamentoForm.form.valid">
            Confirmar e Reservar
          </button>
        </form>

        <div class="agendamento-footer">
          <a routerLink="/home" class="back-link">← Cancelar e voltar</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent {
  valorQuadra: number = 80.00;
  valorEquipamentos: number = 0;
  valorTotal: number = 80.00;

  horariosDisponiveis: string[] = [
    '08:00', '09:00', '10:00', '14:00', '15:00', '16:00', '18:00', '19:00', '20:00', '21:00'
  ];

  dadosAgendamento = {
    data: '',
    horario: '',
    alugarRaquete: false,
    alugarBola: false,
    formaPagamento: ''
  };

  constructor(private router: Router) {}

  calcularTotal() {
    this.valorEquipamentos = 0;

    if (this.dadosAgendamento.alugarRaquete) {
      this.valorEquipamentos += 15.00;
    }
    if (this.dadosAgendamento.alugarBola) {
      this.valorEquipamentos += 10.00;
    }

    this.valorTotal = this.valorQuadra + this.valorEquipamentos;
  }

  confirmarAgendamento() {
    const agendamentoPayload = {
      data: this.dadosAgendamento.data,
      horario: this.dadosAgendamento.horario,
      formaPagamento: this.dadosAgendamento.formaPagamento,
      alugouEquipamentos: this.dadosAgendamento.alugarRaquete || this.dadosAgendamento.alugarBola,
      valorTotal: this.valorTotal
    };

    console.log('Payload do agendamento para o Spring Boot:', agendamentoPayload);

    alert(`Agendamento realizado com sucesso!\nValor Total: R$ ${this.valorTotal.toFixed(2)}\nForma de Pagamento: ${this.dadosAgendamento.formaPagamento}`);
    this.router.navigate(['/home']);
  }
}
