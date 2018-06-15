import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CarrinhoLayoutComponent } from '../carrinho/carrinho-layout/carrinho-layout.component';



const CarrinhoRoutes: Routes = [
    {path: 'carrinho-layout', component: CarrinhoLayoutComponent} 
]; 

@NgModule({
    imports: [RouterModule.forChild(CarrinhoRoutes)],
    exports: [RouterModule]
  })
  
export class CarrinhoRouting {}

