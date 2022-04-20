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
import { HttpClientModule} from '@angular/common/http';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { ValidatingloginService } from './validatinglogin.service';
import {AddStockComponent } from './pages/stock/add-stock/add-stock.component';
import { ModalComponent } from './pages/modal/modal.component';
import { BannerComponent } from './pages/banner/banner.component';
import { FooterComponent } from './pages/footer/footer.component';


import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NumberOnlyDirective } from './pages/directives/number-only.directive';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {LayoutModule} from '@angular/cdk/layout';
import { MatCarouselModule } from '@ngmodule/material-carousel';

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
    FooterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    LayoutModule,
    MatCarouselModule.forRoot()
  ],
  providers: [
    ValidatingloginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
