import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-painel-admin',
  standalone: true,
  template: `
    <div style="padding: 50px; text-align: center;">
      <h1>Painel do Administrador</h1>
      <p>Escolha uma ação abaixo:</p>
      <button (click)="irParaAgendamentos()">Ver Agendamentos</button>
    </div>
  `
})
export class PainelAdminComponent {
  constructor(private router: Router) {}
  irParaAgendamentos() {
    this.router.navigate(['/dashboard-admin']);
  }
}

export class AdminHomeComponent {
}
