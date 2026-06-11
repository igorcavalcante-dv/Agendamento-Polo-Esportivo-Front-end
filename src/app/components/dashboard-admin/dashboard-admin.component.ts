import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {
  view: 'cadastro' | 'agenda' = 'cadastro';

  espaco = { nome: '', modalidades: '', valor: 0 };

  agendamentos = [
    { data: '12/06/2026', horario: '19:00', cliente: 'Ismael', valor: 100 },
    { data: '13/06/2026', horario: '20:00', cliente: 'Carlos', valor: 120 }
  ];

  salvar() {
    alert(`Espaço "${this.espaco.nome}" configurado com sucesso!`);
  }
}
