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
import {AddStockComponent, AddStockDialogComponent } from './pages/stock/add-stock/add-stock.component';

import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EliminarComponent,
    CategoriasComponent,
    StockComponent,
    HeaderComponent,
    AddStockComponent,
    AddStockDialogComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
