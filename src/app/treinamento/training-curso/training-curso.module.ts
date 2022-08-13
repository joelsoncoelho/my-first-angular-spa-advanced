import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from 'src/app/components/directives/directives.component';
import { EventosComponent } from 'src/app/components/eventos/eventos.component';
import { FirstComponentComponent } from 'src/app/components/first-component/first-component.component';
import { IfRenderComponent } from 'src/app/components/if-render/if-render.component';
import { ParentDataComponent } from 'src/app/components/parent-data/parent-data.component';
import { RouterModule } from '@angular/router';
import { ChangeNumberComponent } from 'src/app/components/change-number/change-number.component';
import { EmitterComponent } from 'src/app/components/emitter/emitter.component';
import { PaiComponent } from 'src/app/components/emitter/pai.component';
import { FilhoComponent } from 'src/app/components/emitter/filho.component';
import { ListRenderComponent } from 'src/app/components/list-render/list-render.component';
import { PipesComponent } from 'src/app/components/pipes/pipes.component';
import { TwoWayBindingComponent } from 'src/app/components/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    PaiComponent,
    FilhoComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
  ],
  exports: [
    BrowserModule,
    FormsModule,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    PaiComponent,
    FilhoComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindingComponent
  ]
})
export class TrainingCursoModule { }
