import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class Products implements OnInit {

  products$!: Observable<Product[]>;
  whatsappBaseUrl = 'https://wa.me/5562991525978?text=';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getFeaturedProducts();
  }
}
