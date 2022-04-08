import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  name= window.localStorage.getItem("username");
  constructor(private  router: Router ) {
     }

  ngOnInit(): void {

  console.log(window.localStorage.getItem("username"))

  }

  gotoProducts() {
    this.router.navigate(['stock']);
  }

  gotoCategorys() {
    this.router.navigate(['categorias']);
  }

  
  
}


