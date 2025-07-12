import { Component } from '@angular/core';
import { TrustBadge } from '../../models/trustbar';

@Component({
  selector: 'app-trust-bar',
  imports: [],
  templateUrl: './trust-bar.html',
  styleUrl: './trust-bar.scss'
})
export class TrustBar {
  badges: TrustBadge[] = [
    { iconClass: 'fas fa-truck-fast', title: 'Entrega Rápida', description: 'Em Goiânia e Região' },
    { iconClass: 'fas fa-boxes-stacked', title: 'Ampla Variedade', description: 'Tudo em um só lugar' },
    { iconClass: 'fab fa-whatsapp', title: 'Peça Pelo WhatsApp', description: 'Atendimento Ágil' },
    { iconClass: 'fas fa-shield-halved', title: 'Qualidade Garantida', description: 'Os melhores produtos' }
  ];
}
