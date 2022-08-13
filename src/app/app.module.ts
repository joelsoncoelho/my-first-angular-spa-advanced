import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { ExemploReactiveFormsComponent } from './demos/reactiveForms/exemplo-reactive-forms/exemplo-reactive-forms.component';
import { TrainingCursoComponent } from './treinamento/training-curso/training-curso.component';
import { TrainingCursoModule } from './treinamento/training-curso/training-curso.module';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AppRoutingModule } from './app-routing.module';
import { ProdutoModule } from './demos/arquiteturas-componente/produto.module';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { BarServices } from './demos/bar-di-zones/bar.service';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { TodoModule } from './demos/todo-list/todo.module';

export const BAR_PROVIDERS: Provider[] = [
  BarServices
];


@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    ExemploReactiveFormsComponent,
    TrainingCursoComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe,
    
 ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TrainingCursoModule,
    NavegacaoModule,
    AppRoutingModule,
    ProdutoModule,
    AdminModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'eca98784847347837482'
    }),
    TodoModule
  ],
  providers: [
    AuthGuard,
    CadastroGuard,
    //BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }