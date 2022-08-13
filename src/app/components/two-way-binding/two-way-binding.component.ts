import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

  name:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public nome:string= "";

  // comentado no html
  keyUp(event: any){
    this.nome = event.target.value;
  }


}
