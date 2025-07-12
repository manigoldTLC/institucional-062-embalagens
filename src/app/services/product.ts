import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Copos Descartáveis 200ml',
      description: 'Pacotes com 100 unidades, ideais para escritórios, festas e eventos.',
      imageUrl: 'assets/images/produtos/copos-descartaveis.png',
      imageAlt: 'Pilha de copos descartáveis brancos de 200ml.',
      whatsappMessage: 'Olá! Tenho interesse nos Copos Descartáveis de 200ml.'
    },
    {
      id: 2,
      name: 'Marmitas de Isopor Nº8',
      description: 'Conserva a temperatura dos alimentos. Perfeita para delivery e restaurantes.',
      imageUrl: 'assets/images/produtos/marmitas-isopor.png',
      imageAlt: 'Pilha de marmitas de isopor brancas número 8.',
      whatsappMessage: 'Olá! Gostaria de um orçamento para as Marmitas de Isopor Nº8.'
    },
    {
      id: 3,
      name: 'Sacos de Lixo 100L',
      description: 'Reforçados e de alta qualidade para uso comercial ou residencial.',
      imageUrl: 'assets/images/produtos/saco-de-lixo.png',
      imageAlt: 'Rolo de sacos de lixo pretos de 100 litros.',
      whatsappMessage: 'Olá! Quero saber mais sobre os Sacos de Lixo de 100L.'
    },
  ];

  constructor() { }

  getFeaturedProducts(): Observable<Product[]> {
    return of(this.products);
  }
}