import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../interfaces';
import {AddStockService} from '../../../service/add-stock.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from '../../modal/modal.component';

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
  responseModal: any;

  constructor(
    private formBuilder: FormBuilder,
    private  router: Router,
    private addstockservice: AddStockService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.formGroupProduct = this.formBuilder.group({
      name: ['', Validators.required],
      idCategory: ['', Validators.required],
      brand: ['', Validators.required],
      description: ['', Validators.required],
      stock: ['', [Validators.min(1), Validators.required]],
      active: ['', Validators.required],
      sku: ['', Validators.required]
    });


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
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {textrequest: request, textresponse: this.responseModal, nameService:'Product'}});
    dialogRef.afterClosed().subscribe(result => {
      this.responseModal = result;
      switch (this.responseModal) {
        case 'save':
          this.save();
          break;

      }
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
          this.openModal('errorSku');
        } else {
          this.openModal('error');
        }
      }
    );
  }


}

