import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';

import  localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoDashboardComponent } from './produto-dasboard/produto-dasboard.component';
import { ProdutoRoutingModule } from './produto.routes';
import { ProdutoDetalheComponent } from './componentes/produto-card-detalhe.component';
import { ProdutoCountComponent } from './componentes/produto-count.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoAppComponent } from './produto.app.component';
import { ProdutoService } from './services/produto.service';
import { ProdutosResolve } from './services/produto.resolve';


@NgModule({
  declarations: [
    ProdutoAppComponent,
    ProdutoDashboardComponent,
    ProdutoDetalheComponent,
    ProdutoCountComponent,
    EditarProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  providers: [
    ProdutoService,
    ProdutosResolve
  ],
  exports: []
})
export class ProdutoModule { }
