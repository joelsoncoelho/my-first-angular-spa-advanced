import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Store } from './todo.store';

@Injectable()
export class TasksService {


  constructor(private httpClient: HttpClient, private store: Store) { }

  getTodoList$: Observable<Task[]> = this.httpClient
    .get<Task[]>('http://localhost:3000/todolist')
    .pipe(tap( next => this.store.set('todolist', next)));

  /*
  getTodoList(): Observable<Task[]>{
    return this.httpClient.get<Task[]>('http://localhost:3000/todolist');
  }
  */

  toggle(event: any) {
   this.httpClient.put(`http://localhost:3000/todolist/${event.task.id}`, event.task)
   .subscribe(()=> {

    const value = this.store.value.todolist;

    const todolist = value.map((task: any)=>{
        if(event.task.id === task.id){
          return { ...task, ...event.task}
        } else {
          return task;
        }
    });

    this.store.set('todolist', todolist)

   });
  }

}
