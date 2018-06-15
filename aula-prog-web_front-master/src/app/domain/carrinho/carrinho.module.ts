import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {CarrinhoRouting} from '../carrinho/carrinho-routing.module';


//não faz sentido
// import {Carrinho} from './carrinho';
// import {Produto} from '../produto/produto';



// import {CarrinhoComponent} from './carrinho.component';
// import{CarrinhoService} from './carrinho.service';

import {CarrinhoRouting} from './carrinho-routing.module';
import { CarrinhoLayoutComponent } from './carrinho-layout/carrinho-layout.component';

@NgModule({
  declarations: [
    //Componentes
    // CarrinhoComponent,
    CarrinhoLayoutComponent
],
  imports: [
    // angular
    HttpModule,
    RouterModule,
    CommonModule,
    //form
    FormsModule,
    ReactiveFormsModule,
    // Routing
    CarrinhoRouting
  ],
  
  providers: [
    // services
    // CarrinhoService
  ]
})
export class CarrinhoModule { }
