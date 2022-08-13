import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

    familia: Object[];

    constructor() {
      this.familia = [
        {
          nome: 'Vitor',
          sobreNome: 'Borges'
        },
        {
          nome: 'Emerson',
          sobreNome: 'Daniel'
        },
        {
          nome: 'Thiago',
          sobreNome: 'Contre!'
        }
      ];
    }

    ngOnInit() {
        console.log(this.familia);
    }

    // função para receber emit Output do Filho
  reciverFeedback(respostaFilho: Event) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaFilho);
  }

}