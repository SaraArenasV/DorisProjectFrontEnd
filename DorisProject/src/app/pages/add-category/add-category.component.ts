import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CategoriasService} from 'src/app/service/categorias.service';
import {ModalComponent} from '../modal/modal.component';
import {MatDialog} from '@angular/material/dialog';
import {Product} from '../../interfaces';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  addCategoryForm: FormGroup;
  mensaje: String;
  mostrar: boolean;
  mostrarError: boolean;
  responseModal: any;

  constructor(private router: Router,
              private categoryService:
                CategoriasService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog
  ) {


  }

  ngOnInit(): void {

    this.addCategoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

  }

  save() {
    this.mostrar = false;
    this.mostrarError = false;
    const category = {
      'name': this.addCategoryForm.get('name').value,
      'description': this.addCategoryForm.get('description').value,
      'active': 'Y'
    };
    this.categoryService.save(category).subscribe(data => {
        this.mensaje = 'Category created successfully!!';
        this.openModal('succes');
        this.addCategoryForm.reset();
      }, err => {

        if (err.error.text === 'Category name is exist') {
          this.openModal('errorExitsCategoryy');
        }else {
          this.openModal('error');
        }
      }
    );
  }

  onChange(event) {
    this.mostrar = false;
    this.mostrarError = false;
    this.mensaje = '';
  }


  get mostrarMensaje() {
    return this.mostrar;
  }

  get mostrarMensajeError() {
    return this.mostrarError;
  }

  backToList() {
    this.router.navigate(['categorias']);
  }

  get nameRequerid() {
    return this.addCategoryForm.get('name').invalid && this.addCategoryForm.get('name').touched;
  }

  get descriptionRequerid() {
    return this.addCategoryForm.get('description').invalid && this.addCategoryForm.get('description').touched;
  }


  openModal(request: string) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {textrequest: request, textresponse: this.responseModal,nameService:'Category'}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.responseModal = result;
      switch (this.responseModal) {
        case 'save':
          this.save();
          break;

      }
    });
  }

}
