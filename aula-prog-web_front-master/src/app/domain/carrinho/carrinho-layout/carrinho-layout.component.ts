import { Component, OnInit } from '@angular/core';
import {CarrinhoService} from '../carrinho.service';
import {Produto} from '../../produto/produto';

@Component({
  selector: 'app-carrinho-layout',
  templateUrl: './carrinho-layout.component.html',
  styleUrls: ['./carrinho-layout.component.css']
})
export class CarrinhoLayoutComponent implements OnInit {

  constructor( private ganbiarra : CarrinhoService) { }

  produtosDoCarrinho : Produto[];

  ngOnInit() {
    this.produtosDoCarrinho = this.ganbiarra.jogarVariavel();
  }

}
