import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {CategoriasComponent} from './pages/categorias/categorias.component';
import {EliminarComponent} from './pages/eliminar/eliminar.component';
import {StockComponent} from './pages/stock/stock.component';
import {AddStockComponent} from './pages/stock/add-stock/add-stock.component';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'eliminar', component: EliminarComponent},
  {path: 'stock', component: StockComponent} ,
  {path: 'add-stock', component: AddStockComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
