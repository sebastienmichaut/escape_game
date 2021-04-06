import { Component, OnInit } from '@angular/core';

interface ImageSlide {
  url: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  
  image1: ImageSlide = {
    url: './assets/images/escape1.jpg',
    alt: 'image escape 1',
    title: 'Escape 1'
  }
  image2: ImageSlide = {
    url: './assets/images/escape2.jpg',
    alt: 'image escape 2',
    title: 'Escape 2'
  }

imageSelected: ImageSlide = this.image1;

isDisabled = false;
isVisible = false;

seeMore(){
  alert("ALERTE")
}

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      // this.image1.url = this.image2.url;
      // this.image1.alt = this.image2.alt;
      // this.image1.title = this.image2.title;

      this.imageSelected = this.image2;
    }, 3000);
  }
}
