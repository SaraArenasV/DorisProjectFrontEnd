import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from 'src/app/service/product.service';
import {Router} from '@angular/router';
import {ModalComponent} from '../modal/modal.component';
import {MatDialog} from '@angular/material/dialog';

import {MatPaginator} from '@angular/material/paginator';
import {tap} from 'rxjs/operators';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']

})

// export class TableBasicExample {
//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataproduct: any;
// }
export class StockComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatTable) table: MatTable<any>;
  totalLength = 0;
  dataSource = new MatTableDataSource();
  // dataSource: any;
  products: any[] = [];
  productsMaster: any[] = [];
  responseModal: any;

  displayedColumns = ['id', 'sku', 'name', 'description', 'brand', 'category', 'stock', 'updateDate', 'edit', 'delete'];

  constructor(private productService: ProductService, private  router: Router,
              private dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.productService.getSotck().subscribe(data => {
      data.forEach(product => {
        let dataproduct = {
          id: product.id,
          sku: product.sku,
          name: product.name,
          description: product.description,
          brand: product.brand,
          category: product.categoryName,
          stock: product.stock,
          updateDate: product.ingressdate
        };

        this.productsMaster.push(dataproduct);
      });
      this.products = this.productsMaster;
      this.dataSource.data = this.products;
    });
    // this.ngAfterViewInit();
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;

  }


  search(event: any) {
    const SearchList = [];
    if (event.target.value == '') {
      this.products = this.productsMaster;
    } else {
      this.productsMaster.forEach(product => {
        // console.log(product);
        if (product.id.toString().toLowerCase().includes(event.target.value.toLowerCase())) {
          SearchList.push(product);
          return;
        }
        if (product.description.toLowerCase().includes(event.target.value.toLowerCase())) {
          SearchList.push(product);
          return;
        }
        if (product.sku.toLowerCase().includes(event.target.value.toLowerCase())) {
          SearchList.push(product);
          return;
        }
        if (product.category.toLowerCase().includes(event.target.value.toLowerCase())) {
          SearchList.push(product);
        }
        if (product.Name.toLowerCase().includes(event.target.value.toLowerCase())) {
          SearchList.push(product);
        }
        if (product.Brand.toLowerCase().includes(event.target.value.toLowerCase())) {
          SearchList.push(product);
        }

      });
      this.products = SearchList;
      this.dataSource.data = this.products;
    }


  }

  addProduct() {
    this.router.navigate(['add-stock'], {state: {data: null}});
  }

  edit(data: any) {
    this.router.navigate(['add-stock'], {state: {data: data}});
  }


  openModal(request: string) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '445px', height: '235px',
      data: {textrequest: request, textresponse: this.responseModal}
    });
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
