import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {CarrinhoComponent} from './carrinho.component';

//não faz sentido
import {Carrinho} from './carrinho';
import {Produto} from '../produto/produto';



import{CarrinhoService} from './carrinho.service';

import {CarrinhoRouting} from './carrinho-routing.module'

@NgModule({
  declarations: [
    //Componentes
    CarrinhoComponent,
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
    CarrinhoService
  ]
})
export class CarrinhoModule { }
