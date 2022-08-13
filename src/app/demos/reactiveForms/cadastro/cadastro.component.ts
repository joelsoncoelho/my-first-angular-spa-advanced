import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastroForm!: FormGroup;
  usuario!: Usuario;
  formResult: string = '';

  mudancasNaoSalvas!: boolean;

  constructor() { }

  ngOnInit(): void {

    this.cadastroForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]),
      cpf: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      senhaConfirmacao: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    })
  }

  onSubmit(): void {
    if(this.cadastroForm.invalid){
      return;
    }
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
    alert(`O usuário ${this.usuario.nome} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(this.usuario)}`);
    this.formResult = JSON.stringify(this.cadastroForm.value);

    
    
    this.cadastroForm.reset();
    //formDir.resetForm();
  }

  onReset(): void {
    this.cadastroForm.reset();
  }

  get nome(){
    return this.cadastroForm.get('nome')!;
  }

  get cpf(){
    return this.cadastroForm.get('cpf')!;
  }

  get email(){
    return this.cadastroForm.get('email')!;
  }

  get senha(){
    return this.cadastroForm.get('senha')!;
  }

  get senhaConfirmacao(){
    return this.cadastroForm.get('senhaConfirmacao')!;
  }

}
