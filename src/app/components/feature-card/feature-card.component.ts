import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card-recurso">
      <div class="card-icone">{{ icone }}</div>
      <h3>{{ titulo }}</h3>
      <p>{{ descricao }}</p>
    </div>
  `,
  styles: [`
    .card-recurso {
      background: #ffffff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      text-align: center;
      transition: transform 0.2s, box-shadow 0.2s;
      flex: 1;
      min-width: 250px;
      max-width: 350px;
    }

    .card-recurso:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    .card-icone {
      font-size: 2.5rem;
      margin-bottom: 16px;
    }

    .card-recurso h3 {
      color: #0f172a;
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0 0 12px 0;
    }

    .card-recurso p {
      color: #475569;
      font-size: 0.95rem;
      line-height: 1.6;
      margin: 0;
    }
  `]
})
export class FeatureCardComponent {
  @Input() icone: string = '⭐';
  @Input() titulo: string = '';
  @Input() descricao: string = '';
}
