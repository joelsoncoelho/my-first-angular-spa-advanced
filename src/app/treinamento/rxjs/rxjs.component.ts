import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  usuario!: Usuario;

  constructor() { }

  ngOnInit(): void {

    /*
    this.minhaPromise('Joelson')
      .then(result => console.log(result));
    */

      /*
    this.minhaPromise('Elena')
      .then(result => console.log(result))
      .catch(error => console.log(error));
    */

      /*
    this.minhaObservable('Joelson')
      .subscribe(
        result => console.log('Observer got a next value: ' + result)
      );
*/

  const observer = {
    next: (valor: Usuario) => {
      this.usuario = valor, 
      console.log(this.usuario);
    },
    error: (err: any) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  /*
  const obs = this.minhaObservable('Joelson');
  obs.subscribe(observer);
*/

  const obs = this.usuarioObservable('Admin', 'admim@gmail.com');
  const subs = obs.subscribe(observer);

  setTimeout(() => {
    subs.unsubscribe();
    console.log('Conexao fechada:', subs.closed);
    
  }, 3500);


  }

  minhaPromise(nome: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (nome === 'Joelson') {
        setTimeout(() => {
          resolve('Seja bem vindo ' + nome);
        }, 1000);
      }
      else {
        reject('Ops! Você é o Eduardo');
      }
    })
  }

  /*-----------------------------------------*/

  minhaObservable(nome: string): Observable<string> {
    return new Observable(subscriber => {
      if (nome === 'Joelson') {
        subscriber.next('Olá');
        subscriber.next('Olá de novo');
        setTimeout(() => {
          subscriber.next('Resposta com delay');
        }, 5000);
      } else {
        subscriber.error('Ops! Deu erro.')
      }
    });
  }


  /*--------------------------------------------*/

  usuarioObservable(nome: string, email: string): Observable<Usuario> {
    return new Observable(subscriber => {
      if (nome === 'Admin') {
        let usuario = new Usuario(nome, email);
        setTimeout(() => {
          subscriber.next(usuario);
        }, 1000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 2000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 3000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 4000);

        setTimeout(() => {
          subscriber.complete()
        }, 5000);
        
      } 
    });
  }

}

class Usuario {

  private nome: string;
  private email: string;

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }

}
