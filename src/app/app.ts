import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Products } from "./components/products/products";
import { AboutUs } from "./components/about-us/about-us";
import { Contact } from "./components/contact/contact";
import { InstagramGallery } from './components/instagram-gallery/instagram-gallery';
import { TrustBar } from './components/trust-bar/trust-bar';
import { Footer } from "./components/footer/footer";
import { FloatingCta } from './components/floating-cta/floating-cta';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Products, AboutUs, Contact, InstagramGallery, TrustBar, Footer, FloatingCta],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = '062 Embalagens';
}
