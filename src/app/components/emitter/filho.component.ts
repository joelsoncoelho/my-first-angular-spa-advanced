import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {

  //Recebendo o objeto família do Pai via Input
  @Input() recebeFamilia: any;

  //Output Emitindo eventos para o Pai
  @Output() respostaFamilia = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
      console.log(this.recebeFamilia);
      console.log('Objeto familia recebido do component pai via Input: ', this.recebeFamilia);
  }

  feedback(){
    console.log('Resposta para o component pai', this.respostaFamilia.emit({"nome": "Raphella", "SobreNome": "Souza"}));
  }

}