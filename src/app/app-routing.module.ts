import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { TrainingCursoComponent } from './treinamento/training-curso/training-curso.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { BarComponent } from './demos/bar-di-zones/bar.component';
import { TodoComponent } from './demos/todo-list/todo.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard]},
    { path: 'treinamento', component: TrainingCursoComponent },
    { path: 'produtos',
            loadChildren: () => import('./demos/arquiteturas-componente/produto.module')
            .then(modulo => modulo.ProdutoModule)},
    { path: 'admin',
            loadChildren: () => import('./admin/admin.module')
            .then(modulo => modulo.AdminModule),
                canLoad: [AuthGuard], canActivate: [AuthGuard]},
    { path: 'filmes', component: FilmesComponent },
    { path: 'bar', component: BarComponent },
    { path: 'todo', component: TodoComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
