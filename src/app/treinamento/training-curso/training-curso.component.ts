import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-curso',
  templateUrl: './training-curso.component.html',
  styleUrls: ['./training-curso.component.scss']
})
export class TrainingCursoComponent implements OnInit {

  userName = 'Elena';

  userData = {
    email: 'elena@gmail.com',
    role: 'Admin'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
