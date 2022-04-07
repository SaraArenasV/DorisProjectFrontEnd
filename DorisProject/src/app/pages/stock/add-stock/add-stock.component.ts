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

  // tslint:disable-next-line:ban-types
  state: String = 'NEW';
  @Input() formGroupProduct: FormGroup;
  category: any;
  product: any;


  constructor(
    private formBuilder: FormBuilder,
    private  router: Router,
    private addstockservice: AddStockService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.formGroupProduct = this.formBuilder.group({
      id: [0],
      idcategory: ['', Validators.required],
      brand: ['', Validators.required],
      description: ['', Validators.required],
      stock: ['', Validators.required],
      active: ['', Validators.required],
      sku: ['', Validators.required]
    });


    this.addstockservice.getCagetorys().subscribe((response) => {
        console.log('request al servicio getCategoryList ');
        if (response != null) {
          console.log('getCategoryList Response: ', response);
          this.category = response;
          console.log('categorySet : ', this.category);
        }
      }, err => {
        console.log('error: ', err);
      }
    );

  }

  getErrorMessage() {
    return this.formGroupProduct.hasError('required') ? 'Campo requerido' : '';
  }

  openModal() {
    const dialogRef = this.dialog.open(AddStockDialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  save() {
    const data: Product = this.formGroupProduct.getRawValue();

    console.log(data);
    this.addstockservice.save(data).subscribe(response => {
        console.log('request al servicio save', data);
        if (data != null) {
          this.router.navigate(['stock']);
          this.openModal();
        }
        console.log('response ', response);
      }, err => {
        console.log('error: ', err);
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
}
