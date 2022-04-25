import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {

  slides:any;

  constructor() {
   this.slides = [
      {'image': 'assets/img/logo.png'},
      {'image': 'assets/img/postinventarios.png'},
      {'image': 'assets/img/controldeinventarios.png'},
    ];
  }

  ngOnInit(): void {

  }

}
