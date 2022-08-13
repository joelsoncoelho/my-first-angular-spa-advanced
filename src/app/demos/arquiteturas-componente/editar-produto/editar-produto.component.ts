import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent implements OnInit {

  produto!: Produto | undefined;

  constructor(
    private route: ActivatedRoute, 
    private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit(){
    this.route.params
      .subscribe(params => {
        console.log(params['id']);
        this.produto = this.produtoService.obterPorId(params['id']);
      })
  }

  salvar(){
    this.router.navigate(['/produtos']);
  }

}
