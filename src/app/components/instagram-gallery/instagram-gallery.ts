import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstagramPost } from '../../models/instagram';

@Component({
  selector: 'app-instagram-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram-gallery.html',
  styleUrls: ['./instagram-gallery.scss']
})
export class InstagramGallery implements OnInit {
  
  private instagramPosts: InstagramPost[] = [
    { id: 1, imageUrl: 'assets/images/produtos/post1(5).png', postUrl: 'https://instagram.com/p/DHy3fuNOB1y/', altText: 'Copos descartáveis' },
    { id: 2, imageUrl: 'assets/images/produtos/post1(4).png', postUrl: 'https://instagram.com/p/DHy3IhMOe6Q/', altText: 'Hamburgueiras' },
    { id: 3, imageUrl: 'assets/images/produtos/post1(6).png', postUrl: 'https://instagram.com/p/DH84y0iOVxz/', altText: 'Sacola 38x48 branca milheiro' },
    { id: 4, imageUrl: 'assets/images/produtos/post1(2).png', postUrl: 'https://instagram.com/p/DH9MjU_uIwP/', altText: 'Fita transparente' },
    { id: 5, imageUrl: 'assets/images/produtos/post1(8).png', postUrl: 'https://instagram.com/p/DIec2inu1Mu/', altText: 'Sacola verde, tamanhos variados' },
    { id: 6, imageUrl: 'assets/images/produtos/post1(1).png', postUrl: 'https://instagram.com/p/DIee3qFOviQ/', altText: 'Saco lonado, varios tamanhos' },
    { id: 7, imageUrl: 'assets/images/produtos/post1(9).png', postUrl: 'https://instagram.com/p/DJXG0OnuUsD/', altText: 'Bobina picotada' },
    { id: 8, imageUrl: 'assets/images/produtos/post1(7).png', postUrl: 'https://instagram.com/p/DIME_25uTNm/', altText: 'Kit pote retangular' },
  ];

  displayPosts: InstagramPost[] = [];
  instagramUsername = '062embalagens';

  ngOnInit(): void {
    this.displayPosts = [...this.instagramPosts, ...this.instagramPosts];
  }
}
