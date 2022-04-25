import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {

  slides: String[] = [];

  constructor() {
  this.slides= ['assets/img/1.png','assets/img/2.png','assets/img/3.png'];
  }

}
