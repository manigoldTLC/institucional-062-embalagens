import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';

interface InstitutionalLink {
  text: string;
  fragment: string;
}

interface ProductLink {
  text: string;
  whatsappMessage: string;
}

interface SocialLink {
  url: string;
  ariaLabel: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  currentYear = new Date().getFullYear();
  whatsappBaseUrl = `https://wa.me/${environment.whatsappNumber}?text=`;

  constructor(private viewportScroller: ViewportScroller) {}

  institutionalLinks: InstitutionalLink[] = [
    { text: 'Sobre Nós', fragment: 'sobre' },
    { text: 'Fale Conosco', fragment: 'contato' },
  ];

  productLinks: ProductLink[] = [
    { text: 'Copos e Descartáveis', whatsappMessage: 'Olá! Gostaria de um orçamento para Copos e Descartáveis.' },
    { text: 'Embalagens e Isopor', whatsappMessage: 'Olá! Gostaria de um orçamento para Embalagens e Isopor.' },
    { text: 'Papelaria', whatsappMessage: 'Olá! Gostaria de um orçamento para materiais de Papelaria.' },
    { text: 'Sacos de Lixo e Limpeza', whatsappMessage: 'Olá! Gostaria de um orçamento para Sacos de Lixo e produtos de Limpeza.' }
  ];

  socialLinks: SocialLink[] = [
    { url: 'https://instagram.com/062embalagens', ariaLabel: 'Instagram', icon: 'assets/icons/icon-instagram.svg' },
    { url: `https://wa.me/${environment.whatsappNumber}`, ariaLabel: 'WhatsApp', icon: 'assets/icons/icon-whatsapp.svg' }
  ];

  scrollToSection(fragment: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(fragment);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + this.viewportScroller.getScrollPosition()[1] - headerOffset;

      this.viewportScroller.scrollToPosition([0, offsetPosition]);
    }
  }
}
