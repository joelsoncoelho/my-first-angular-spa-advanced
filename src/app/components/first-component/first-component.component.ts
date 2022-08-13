import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Joelson';
  age: number = 37;
  job: string = 'Programador Full-Stack';
  hobbies = ['Correr', 'Jogar', 'Estudar'];
  car = {
    name: 'Corsa Classic',
    year: 2012
  }

  constructor() { }

  ngOnInit(): void {
  }

}
