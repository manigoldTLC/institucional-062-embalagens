import { Component } from '@angular/core';
import { InstagramPost } from '../../models/instagram';

@Component({
  selector: 'app-instagram-gallery',
  imports: [],
  templateUrl: './instagram-gallery.html',
  styleUrls: ['./instagram-gallery.scss']
})
export class InstagramGallery {
  instagramPosts: InstagramPost[] = [
    { id: 1, imageUrl: 'assets/images/produtos/post1(5).png', postUrl: 'https://instagram.com/p/DHy3fuNOB1y/?next=%2F062embalagens%2F', altText: 'Copos descartáveis' },
    { id: 2, imageUrl: 'assets/images/produtos/post1(4).png', postUrl: 'https://instagram.com/p/DHy3IhMOe6Q/?next=%2F062embalagens%2F', altText: 'Hamburgueiras' },
    { id: 3, imageUrl: 'assets/images/produtos/post1(6).png', postUrl: 'https://instagram.com/p/DH84y0iOVxz/?next=%2F062embalagens%2F', altText: 'Sacola 38x48 branca milheiro' },
    { id: 4, imageUrl: 'assets/images/produtos/post1(2).png', postUrl: 'https://instagram.com/p/DH9MjU_uIwP/?next=%2F062embalagens%2F', altText: 'Fita transparente' },
    { id: 5, imageUrl: 'assets/images/produtos/post1(8).png', postUrl: 'https://instagram.com/p/DIec2inu1Mu/?next=%2F062embalagens%2F', altText: 'Sacola verde, tamanhos variados' },
    { id: 6, imageUrl: 'assets/images/produtos/post1(1).png', postUrl: 'https://instagram.com/p/DIee3qFOviQ/?next=%2F062embalagens%2F', altText: 'Saco lonado, varios tamanhos' },
    { id: 7, imageUrl: 'assets/images/produtos/post1(9).png', postUrl: 'https://instagram.com/p/DJXG0OnuUsD/?next=%2F062embalagens%2F', altText: 'Bobina picotada' },
    { id: 8, imageUrl: 'assets/images/produtos/post1(7).png', postUrl: 'https://instagram.com/p/DIME_25uTNm/?next=%2F062embalagens%2F', altText: 'Kit pote retangular' },
  ];

  instagramUsername = '062embalagens';
}
