import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { StockComponent } from './pages/stock/stock.component';
import { HeaderComponent } from './pages/header/header.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { ValidatingloginService } from './validatinglogin.service';
import {CategoriasService} from './service/categorias.service';
import {AddStockComponent } from './pages/stock/add-stock/add-stock.component';

import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NumberOnlyDirective } from './pages/directives/number-only.directive';
import { ModalComponent } from './pages/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EliminarComponent,
    CategoriasComponent,
    StockComponent,
    HeaderComponent,
    AddCategoryComponent,
    AddStockComponent,

    NumberOnlyDirective,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    ValidatingloginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
