import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from 'src/app/service/categorias.service';
import {Router} from '@angular/router';
import {ModalComponent} from '../modal/modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  forma: FormGroup;
  categorias: any[]= [];
  categoriasMaster : any []=[];
  responseModal: any;

  constructor(private fb: FormBuilder, private categoryService: CategoriasService, private  router: Router, private dialog: MatDialog) {

 
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

  openModal(request: string, category: any) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '445px', height: '235px',
      data: {textrequest: request, textresponse: this.responseModal,category:category}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.responseModal = result;
      switch (this.responseModal) {
        case 'delete':
          const categoryNew = {
            id: category.id,
            name: category.name                      
          };
          this.categoryService.delete(categoryNew).subscribe((data) => {
            console.log(data)
          }, err => { console.log("error ", err) }
          );
          break;

      }

    });
  }


}
