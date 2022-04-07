import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { CategoriasService } from 'src/app/service/categorias.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  forma: FormGroup;
  categorias: string[];

  constructor(private fb: FormBuilder, private categoryService: CategoriasService, private  router: Router) {

    this.crearFormulario();

  }

  ngOnInit(): void {

    this.getCategorias();
  }

  getCategorias() {
    this.categoryService.getCategory().subscribe((data) => {
      this.categorias = data;
      console.log(this.categorias)
    }, err => { console.log("error ", err) }
    );
  }



addCategory(){
  this.router.navigate(['addcategory']);
}

  get category() {
    return this.forma.get('categorias') as FormArray;
  }

  get categoryValid() {
    return this.forma.get('category').invalid && this.forma.get('category').touched
  }

  get IDcategoryValid() {
    return this.forma.get('idcategory').invalid && this.forma.get('idcategory').touched
  }

  crearFormulario() {
    this.forma = this.fb.group({
      category: ['', Validators.required],
      idcategory: ['', [Validators.required, Validators.minLength(4)]],
      categorias: this.fb.array([
        [], [], [], [], []
      ])

    })

  }



  cargarDataAlFormulario() {
    this.forma.setValue({
      category: '',
      idcategory: ''

    })
  }

  guardar() {

    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach(control => {
        control.markAllAsTouched();
      })

    }

    this.forma.reset({
      category: 'Prueba',
      idcategory: 'Prueba'
    });
  }

}
