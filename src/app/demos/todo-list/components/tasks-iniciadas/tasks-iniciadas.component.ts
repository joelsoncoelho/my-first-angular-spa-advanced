import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html'
})
export class TasksIniciadasComponent implements OnInit {

  iniciadas$!: Observable<any[]>

  constructor(private taskService: TasksService, private store: Store) {}

  ngOnInit() {
    this.iniciadas$ = this.store.getTodoList()
    .pipe(
      map(todolist => todolist.filter(task => task.iniciado && !task.finalizado))
    )
  }

  onToggle(event: any){
    this.taskService.toggle(event);
  }
}
