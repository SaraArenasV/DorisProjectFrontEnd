import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> development

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { StockComponent } from './pages/stock/stock.component';
<<<<<<< HEAD
import { HttpClientModule  } from "@angular/common/http";

//servicios
import { ValidatingloginService } from "./validatinglogin.service";
=======
import { HeaderComponent } from './pages/header/header.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
>>>>>>> development


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EliminarComponent,
    CategoriasComponent,
    StockComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
<<<<<<< HEAD
  ],
  providers: [
    ValidatingloginService
=======
>>>>>>> development
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
