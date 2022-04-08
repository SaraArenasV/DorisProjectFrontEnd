import {Component, OnInit} from '@angular/core';
import {ProductService} from 'src/app/service/product.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  products: any[] = [];
  productsMaster: any[] = [];

  constructor(private productService: ProductService, private  router: Router) {
  }

  ngOnInit(): void {
    this.productService.getSotck().subscribe(data => {
      data.forEach(product => {
        let dataproduct = {
          ID: product.id,
          Sku: product.sku,
          Description: product.description,
          Brand: product.brand,
          Category: product.categoryName,
          Stock: product.stock,
          UpdateDate: product.outgress
        };
        this.productsMaster.push(dataproduct);
      });
      this.products = this.productsMaster;
    });
    //this.products= [{ID:"1",Sku:"555555",Description:"Salt",Brand:"Mae",Category:"Home",Stock:"10",UpdateDate:"1/01/2022"}];
  }

  search(event: any) {
    const SearchList = [];
    if (event.target.value == '') {
      this.products = this.productsMaster;
    } else {
      this.productsMaster.forEach(product => {
        console.log(product);
        if (product.ID.toString().toLowerCase().includes(event.target.value.toLowerCase())) {
          SearchList.push(product);
          return;
        }
        if (product.Description.toLowerCase().includes(event.target.value.toLowerCase())) {
          SearchList.push(product);
          return;
        }
        if (product.Sku.toLowerCase().includes(event.target.value.toLowerCase())) {
          SearchList.push(product);
          return;
        }
        if (product.Category.toLowerCase().includes(event.target.value.toLowerCase())) {
          SearchList.push(product);
        }

      });
      this.products = SearchList;
    }


  }

  addProduct() {
    this.router.navigate(['add-stock']);
  }


}
