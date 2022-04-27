import {Component, OnInit} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  stockRouter = '/stock';
  test = '/stock';
  name = window.localStorage.getItem('username');
  navStart: Observable<NavigationStart>;

  constructor(private  router: Router) {

    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;

    this.navStart.subscribe(result => {
        // console.log('Navigation Started!' + result.url)
        switch (result.url) {
          case '/stock':
            this.stockRouter = result.url;
            break;

          case '/add-stock' :
            this.stockRouter = result.url;
            break;

          case '/categorias' :
            this.stockRouter = result.url;
            break;

          case '/addcategory' :
            this.stockRouter = result.url;
            break;
            console.log('Navigation stock: ' + result.url)
            this.stockRouter = result.url;
            break;

          // console.log('Navigation categorias: ' + result.url)
          // this.stockRouter = result.url;
          // break;
          default:
            console.log('Navigation default: ' + result.url)
            this.stockRouter = '/test';
            break;

        }
      }
    );
  }

  ngOnInit(): void {
  }

  gotoProducts() {
    this.router.navigate(['stock']);
  }

  gotoCategorys() {
    this.router.navigate(['categorias']);
  }

}


