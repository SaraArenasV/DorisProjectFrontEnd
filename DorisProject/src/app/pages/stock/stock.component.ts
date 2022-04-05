import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  products: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.products= [{ID:"1",Sku:"555555",Description:"Salt",Brand:"Mae",Category:"Home",Stock:"10",UpdateDate:"1/01/2022"}];
  }

}
