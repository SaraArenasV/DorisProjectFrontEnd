import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  activeproduct = false;
  activecategorias = false;

  name = window.localStorage.getItem('username');

  constructor(private  router: Router) {
    if (this.router.url === '/stock' || this.router.url === '/add-stock') {
      this.activeproduct = true;
    }

    if (this.router.url === '/categorias' || this.router.url === '/addcategory') {
      this.activecategorias = true;
    }
  }

  ngOnInit(): void {
  }

  gotoProducts() {
    this.activeproduct = true;
    this.activecategorias = false;
    this.router.navigate(['stock']);
  }

  gotoCategorys() {
    this.activeproduct = false;
    this.activecategorias = true;
    this.router.navigate(['categorias']);
  }

}


