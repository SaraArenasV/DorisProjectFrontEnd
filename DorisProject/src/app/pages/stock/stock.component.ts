import {Component, OnInit} from '@angular/core';
import {ProductService} from 'src/app/service/product.service';
import {Router} from '@angular/router';
import {ModalComponent} from '../modal/modal.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  products: any[] = [];
  productsMaster: any[] = [];
  responseModal: any;

  constructor(private productService: ProductService, private  router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.productService.getSotck().subscribe(data => {
      data.forEach(product => {
        let dataproduct = {
          ID: product.id,
          Sku: product.sku,
          Name: product.name,
          Description: product.description,
          Brand: product.brand,
          Category: product.categoryName,
          Stock: product.stock,
          UpdateDate: product.ingressdate
        };
        this.productsMaster.push(dataproduct);
      });
      this.products = this.productsMaster;
    });
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


  openModal(request: string) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '445px',
     height: '235px',
      data: {textrequest: request, textresponse: this.responseModal}});
    dialogRef.afterClosed().subscribe(result => {
      this.responseModal = result;
      switch (this.responseModal) {
        case 'delete':
          console.log('eliminado');
          break;

      }

    });
  }


}
