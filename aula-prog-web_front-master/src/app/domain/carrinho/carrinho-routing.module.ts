import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CarrinhoComponent } from './carrinho.component';

//não faz sentido
import { CarrinhoService } from './carrinho.service';
import {CarrinhoModule} from './carrinho.module'



const CarrinhoRoutes: Routes = [
    {path: '', component: CarrinhoComponent}
     
]; 

@NgModule({
    imports: [RouterModule.forChild(CarrinhoRoutes)],
    exports: [RouterModule]
  })
  
export class CarrinhoRouting {}

