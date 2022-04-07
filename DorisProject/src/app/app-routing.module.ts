import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { StockComponent } from './pages/stock/stock.component';
import {AddStockComponent} from './pages/stock/add-stock/add-stock.component';
import { AuthGuard } from "./service/auth.guard";


const routes: Routes = [


{path:'', component:LoginComponent},
{path:'categorias', component:CategoriasComponent, canActivate:[AuthGuard]},
{path:'eliminar', component:EliminarComponent, canActivate:[AuthGuard]},
{path:'stock', component:StockComponent, canActivate:[AuthGuard]},
  {path: 'add-stock', component: AddStockComponent,canActivate:[AuthGuard]},
 {path:'**', pathMatch:'full', redirectTo:'login', canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
