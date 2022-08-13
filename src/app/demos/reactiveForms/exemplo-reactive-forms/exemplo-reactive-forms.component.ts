import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-exemplo-reactive-forms',
  templateUrl: './exemplo-reactive-forms.component.html',
  styleUrls: ['./exemplo-reactive-forms.component.scss']
})
export class ExemploReactiveFormsComponent implements OnInit {

  cadastroForm!: FormGroup;
  usuario!: Usuario;
  formResult: string = '';

  mudancasNaoSalvas!: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf:  ['', Validators.required],
      email:  ['', [Validators.required, Validators.email]],
      senha:  ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      senhaConfirmacao: ['', [Validators.required]],
    })
  }

  onSubmit(): void {
    if(this.cadastroForm.dirty && this.cadastroForm.valid){
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      alert(`O usuário ${this.usuario.nome} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(this.usuario)}`);
      this.formResult = JSON.stringify(this.cadastroForm.value);
      this.mudancasNaoSalvas = false;

      this.cadastroForm.reset();
    } else {
      this.formResult = "Não submeteu!!!";
    }
  }

  onReset(): void {
    this.cadastroForm.reset();
  }
}
