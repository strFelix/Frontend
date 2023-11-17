import { IProduto } from './../../../model/IProduto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listarprodutos',
  templateUrl: './listarprodutos.component.html',
  styleUrls: ['./listarprodutos.component.css']
})
export class ListarprodutosComponent implements OnInit {

  listaProdutos: IProduto[] = [];

  constructor(private ProdutosService: ProdutosService) {

  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void{
    this.ProdutosService.buscarTodos().subscribe(retorno => {
      this.listaProdutos = retorno;
    })
  }
}
