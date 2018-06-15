import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Component
import {ProdutoListComponent} from './produto-list/produto-list.component';
import {ProdutoFormComponent} from './produto-form/produto-form.component';
import {ProdutoCardsComponent } from './produto-cards/produto-cards.component';


// import {CarrinhoComponent} from '../carrinho/carrinho.component';
// import {CarrinhoService} from '../carrinho/carrinho.service'; 


//routing 
import {ProdutoRouting} from './produto-routing.module';

//Service
import {ProdutoService} from './produto.service';
// import {CarrinhoService} from '../carrinho/carrinho.service';
// import {CarrinhoComponent} from '../carrinho/carrinho.component'; esta 

@NgModule({
    declarations: [
        //Componentes
        // CarrinhoComponent,
        ProdutoListComponent,
        ProdutoFormComponent,
        ProdutoCardsComponent,
        // CarrinhoComponent esta declarado em app.module

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
      ProdutoRouting
    ],
    
    providers: [
      // services
      // CarrinhoService,
      ProdutoService
      // CarrinhoService
    ]
  })
  export class ProdutoModule { }