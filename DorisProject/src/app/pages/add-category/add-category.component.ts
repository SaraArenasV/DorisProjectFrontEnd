import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { CategoriasService } from 'src/app/service/categorias.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  addCategoryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl ('', [Validators.required]),
  });

  constructor(private  router: Router,private categoryService: CategoriasService) { }

  ngOnInit(): void {
  }

  save() {
    const category = {name: this.addCategoryForm.get('name').value, description: this.addCategoryForm.get('description').value, active:"Y"};
    this.categoryService.save(category).subscribe(data => {
      console.log(data);      
    }, err => { console.log("error ", err) }
    );
  }

  backToList(){
    this.router.navigate(['categorias']);
  }

  get nameRequerid() {
    return this.addCategoryForm.get('name').invalid ;
  }

  get descriptionRequerid() {
    return this.addCategoryForm.get('description').invalid ;
  }

}
