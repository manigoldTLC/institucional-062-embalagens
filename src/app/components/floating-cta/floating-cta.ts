import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { config } from '../../../configs/config';

@Component({
  selector: 'app-floating-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-cta.html',
  styleUrl: './floating-cta.scss',
})
export class FloatingCta implements OnInit {
  isTooltipVisible = false;
  shouldRenderTooltip = false;
  private readonly tooltipDelay = 7000;

  whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=Ol%C3%A1%21+Gostaria+de+um+or%C3%A7amento.`;

  ngOnInit(): void {
    setTimeout(() => {
      this.shouldRenderTooltip = true;
      this.isTooltipVisible = true;
    }, this.tooltipDelay);
  }

  closeTooltip(): void {
    this.isTooltipVisible = false;
  }
}
