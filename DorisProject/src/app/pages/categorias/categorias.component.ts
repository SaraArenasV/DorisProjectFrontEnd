import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from 'src/app/service/categorias.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  forma: FormGroup;
  categorias: any[]= [];
  categoriasMaster : any []=[];

  constructor(private fb: FormBuilder, private categoryService: CategoriasService, private  router: Router) {

 
  }

  ngOnInit(): void {

    this.getCategorias();
  }

  getCategorias() {
    this.categoryService.getCategory().subscribe((data) => {
      this.categorias = data;
      this.categoriasMaster=data;
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

  search(event: any) {
    const SearchList =[];
    if (event.target.value == "")
        this.categorias= this.categoriasMaster;
      else
      {
          this.categoriasMaster.forEach(category =>{
            console.log(category)
          if(category.description.toLowerCase().includes(event.target.value.toLowerCase()) )
            {
              SearchList.push(category);
              return;
            }
            if(category.name.toLowerCase().includes(event.target.value.toLowerCase()) )
            {
              SearchList.push(category);
              return;
            }
          });
          this.categorias=SearchList;
      }
     
    
      
  }

  delete(category){

  }
 


}
