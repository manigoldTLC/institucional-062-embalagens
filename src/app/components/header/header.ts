import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  isMenuOpen = false;
  isHeaderScrolled = false;

  navLinks: NavLink[] = [
    { label: 'Sobre', fragment: 'sobre' },
    { label: 'Produtos', fragment: 'produtos' },
    { label: 'Contato', fragment: 'contato' },
    { label: 'Instagram', fragment: 'instagram' }
  ];

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isHeaderScrolled = window.scrollY > 10;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  scrollToSection(fragment: string, event: Event): void {
    event.preventDefault();
    this.closeMenu();

    const element = document.getElementById(fragment);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + this.viewportScroller.getScrollPosition()[1] - headerOffset;

      this.viewportScroller.scrollToPosition([0, offsetPosition]);
    }
  }
}
