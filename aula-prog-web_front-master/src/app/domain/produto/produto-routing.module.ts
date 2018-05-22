import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import {ProdutoCardsComponent} from './produto-cards/produto-cards.component'


const ProdutoRoutes: Routes = [
    {path: '', component: ProdutoListComponent},
    {path: 'form', component: ProdutoFormComponent},
    {path: 'form/:id', component: ProdutoFormComponent},
    {path: 'cards', component: ProdutoCardsComponent}    
]; 

@NgModule({
    imports: [RouterModule.forChild(ProdutoRoutes)],
    exports: [RouterModule]
  })
  
export class ProdutoRouting {}

