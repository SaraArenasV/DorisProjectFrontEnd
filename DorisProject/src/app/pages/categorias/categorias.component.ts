import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb:FormBuilder) {

    this.crearFormulario();
   }

  ngOnInit(): void {
  }


get category(){
  return this.forma.get('categorias') as FormArray;
}

  get categoryValid(){
    return this.forma.get('category').invalid&&this.forma.get('category').touched
  }

  get IDcategoryValid(){
    return this.forma.get('idcategory').invalid&&this.forma.get('idcategory').touched
  }

crearFormulario(){
  this.forma=this.fb.group({
    category:['', Validators.required],
    idcategory:['', [Validators.required, Validators.minLength(4)]],
    categorias: this.fb.array([
      [],[],[],[],[]
    ])

  })

}



cargarDataAlFormulario(){
  this.forma.setValue({
    category:'',
    idcategory:''

  })
}

guardar(){

  if (this.forma.invalid) {
    Object.values(this.forma.controls).forEach(control=>{
      control.markAllAsTouched();
    })
  
  }

  this.forma.reset({
    category:'Prueba',
    idcategory:'Prueba'
  });
}

}
