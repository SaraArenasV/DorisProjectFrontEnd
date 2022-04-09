import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../interfaces';
import {AddStockService} from '../../../service/add-stock.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {

  private data: any;

  // tslint:disable-next-line:ban-types
  state: String = 'NEW';
  @Input() formGroupProduct: FormGroup;
  category: any;
  product: any;
  isUpdate: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private  router: Router,
    private addstockservice: AddStockService,
    private dialog: MatDialog,
  ) {


    if (this.router.getCurrentNavigation().extras.state.data != null) {
      this.product = this.router.getCurrentNavigation().extras.state.data;
      this.isUpdate = true;
    } else {
      this.isUpdate = false;
    }
  }

  ngOnInit(): void {
    this.formGroupProduct = this.formBuilder.group({
      id:  [0],
      name: ['', Validators.required],
      idCategory: ['', Validators.required],
      brand: ['', Validators.required],
      description: ['', Validators.required],
      stock: ['', [Validators.min(1), Validators.required]],
      active: ['', Validators.required],
      sku: ['', Validators.required]
    });

    if (this.isUpdate == true) {
      this.loadUpdate();
    }

    this.addstockservice.getCagetorys().subscribe((response) => {
        console.log('request al servicio getCategoryList ');

        if (response != null) {
          console.log('getCategoryList Response: ', response);
          this.category = response;
        }

      }, err => {
        console.log('error: ', err);
      }
    );


  }

  getErrorMessage() {
    return this.formGroupProduct.hasError('required') ? 'Campo requerido' : '';
  }

  backToList() {
    this.router.navigate(['stock']);
  }

  openModal(request: string) {
    const dialogRef = this.dialog.open(AddStockDialogComponent, {data: {textrequest: request}});
    dialogRef.afterClosed().subscribe(result => {
    });
  }


  get errorMesageDescription() {
    return this.formGroupProduct.get('description').invalid && this.formGroupProduct.get('description').touched;
  }

  get errorMesageBrand() {
    return this.formGroupProduct.get('brand').invalid && this.formGroupProduct.get('brand').touched;
  }

  get errorMesageStock() {
    return this.formGroupProduct.get('stock').invalid && this.formGroupProduct.get('stock').touched;
  }

  get errorMesageIdCategory() {
    return this.formGroupProduct.get('idCategory').invalid && this.formGroupProduct.get('idCategory').touched;
  }

  get errorMesageActive() {
    return this.formGroupProduct.get('active').invalid && this.formGroupProduct.get('active').touched;
  }

  get errorMesageSku() {
    return this.formGroupProduct.get('sku').invalid && this.formGroupProduct.get('sku').touched;
  }

  get errorMesageName() {
    return this.formGroupProduct.get('name').invalid && this.formGroupProduct.get('name').touched;
  }


  save() {
    const data: Product = this.formGroupProduct.getRawValue();

    console.log(data);
    this.addstockservice.save(data).subscribe(response => {
        console.log('request al servicio save', data);
        if (data != null) {

          this.openModal('succes');
        }
        console.log('response ', response);
      }, err => {
        console.log('error: ', err);

        if (err.valueOf().error.text === 'El sku ya existe') {
          this.openModal('error sku');
        } else {
          this.openModal('error');
        }
      }
    );
  }

  loadUpdate() {
    this.formGroupProduct.setValue({
      id: this.product.ID,
      name: this.product.Name,
      idCategory: '',
      brand: this.product.Brand,
      description: this.product.Description,
      stock: this.product.Stock,
      active: '',
      sku: this.product.Sku,

    });

  }

  update() {
    const data: Product = this.formGroupProduct.getRawValue();

    console.log(data);
    this.addstockservice.update(data).subscribe(res => {
        console.log('request al servicio save', data);
        if (data != null) {

          this.openModal('succes');
        }
        console.log('response ', res);
      }, err => {
        console.log('error: ', err);

        if (err.valueOf().error.text === 'El sku ya existe') {
          this.openModal('error sku');
        } else {
          this.openModal('error');
        }
      }
    );
  }

}

@Component({
  selector: 'app-add-stock-dialog',
  templateUrl: 'add-stock.component-dialog.html',
})

export class AddStockDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddStockDialogComponent>,
              private  router: Router,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  exit() {
    this.router.navigate(['stock']);
    this.dialogRef.close(1);
  }

  tryAgain() {
    this.dialogRef.close(1);
  }
}
