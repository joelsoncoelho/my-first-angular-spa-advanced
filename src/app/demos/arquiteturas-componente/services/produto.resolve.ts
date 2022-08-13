import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';
import { ProdutoService } from './produto.service';

@Injectable()
export class ProdutosResolve implements Resolve<Produto[]> {
    
    constructor(private produtoService: ProdutoService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Produto[] | Observable<Produto[]> | Promise<Produto[]> {
        throw new Error('Method not implemented.');
    }

    /*
    resolve(route: ActivatedRouteSnapshot) {
        return this.produtoService.obterTodos(route.params.estado);
    }
    */
}