import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  filmes: { title: string, imageUrl: string }[] = [
    { title: "Filme 1", imageUrl: "./homem-aranha-desenho.jpg" },
    { title: "Filme 2", imageUrl: "./homem-aranha.jpg" },
    { title: "Filme 3", imageUrl: "./homemaranha-2.jpg" }
  ]; 
  constructor() { }

  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      slidesPerView: 1, 
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000, 
        disableOnInteraction: false, 
      },
    });
  }
}