import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/service/categorias.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  addCategoryForm: FormGroup;
  mensaje: String;
  mostrar: boolean;
  mostrarError:boolean;

  constructor(private router: Router, private categoryService: CategoriasService, private formBuilder: FormBuilder) {


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
    const category = { "name": this.addCategoryForm.get('name').value, "description": this.addCategoryForm.get('description').value, "active": "Y" };
    this.categoryService.save(category).subscribe(data => {
      this.mensaje = "Category created successfully!!";
      this.mostrar = true;
      this.addCategoryForm.reset();           
    }, err => { 
      console.log("error ", err.error) ;
      this.mensaje = "Error";
      this.mostrarError = true;
    }
    );
  }

  onChange(event){
    this.mostrar = false;
    this.mostrarError = false;
    this.mensaje="";
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

}
