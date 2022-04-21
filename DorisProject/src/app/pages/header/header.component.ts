import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  product: boolean = true;
  categories: boolean = true;
  name = window.localStorage.getItem('username');

  constructor(private  router: Router ) {
     }

  ngOnInit(): void {}

  gotoProducts() {
    this.product = false;
    this.categories = true;
    this.router.navigate(['stock']);

  }
  gotoCategorys() {
    this.product = true;
    this.categories = false;
    this.router.navigate(['categorias']);
  }


}


