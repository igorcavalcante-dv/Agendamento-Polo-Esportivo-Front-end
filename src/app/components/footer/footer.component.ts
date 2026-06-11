import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer-esportivo">
      <div class="footer-container">
        <p>&copy; {{ anoAtual }} Polo esportivo. Todos os direitos reservados.</p>
        <p class="footer-sub">Desenvolvido para facilitar a sua prática cotidiana.</p>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  anoAtual: number = new Date().getFullYear();
}
