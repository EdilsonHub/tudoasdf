import { Component, OnInit } from '@angular/core';
import {ProdutoService} from '../produto.service';
import {Produto} from '../produto';
import {CarrinhoService} from '../../carrinho/carrinho.service';

@Component({
  selector: 'app-produto-cards',
  templateUrl: './produto-cards.component.html',
  styleUrls: ['./produto-cards.component.css']
})
export class ProdutoCardsComponent implements OnInit {

  constructor(private produtoService : ProdutoService, private carrinhoService: CarrinhoService) { }
  produtos : Produto[]
  // carrinhoService: CarrinhoService;
  ngOnInit() {
    this.produtoService.findAll()
      .subscribe(produtos => {
        this.produtos = produtos
      });
  }
  addicionaAoCarrinho(produt: Produto){
    this.carrinhoService.adicionarProduto(produt);
  }


}
