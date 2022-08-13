import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoDashboardComponent } from './produto-dasboard/produto-dasboard.component';
import { ProdutoAppComponent } from './produto.app.component';
import { ProdutosResolve } from './services/produto.resolve';

const produtoRouterConfig: Routes = [
    {
        path: '', component: ProdutoAppComponent,
        children: [
            { path: '', component: ProdutoDashboardComponent },
            { path: 'editar/:id', component: EditarProdutoComponent }
          
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [RouterModule]
})
export class ProdutoRoutingModule { }