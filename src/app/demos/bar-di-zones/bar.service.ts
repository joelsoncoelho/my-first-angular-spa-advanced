import { Inject, Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';

export function BarFactory(httpClient: HttpClient, injector : Injector  /*ApiConfig: BarUnidadeConfig */){
  return new BarServices(httpClient, /*ApiConfig*/ injector.get(BAR_UNIDADE_CONFIG));
}

@Injectable()
export class BarServices {

  constructor(
    private http: HttpClient,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig
    ) {}

    obterUnidade(): string {
      return 'Unidade ID: ' + this.ApiConfig.unidadeId + ' Token: '+ this.ApiConfig.unidadeToken;
    }

  obterBebidas(): string {
    return 'Bebidas';
  }

  obterPorcoes(): string {
    return 'Porções';
  }

  obterRefeicoes(): string {
    return 'Refeições';
  }
}

@Injectable()
export class BarServicesMock {

  constructor(private http: HttpClient) {}

  obterBebidas(): string {
    return 'Mock';
  }

  obterPorcoes(): string {
    return 'Mock';
  }

  obterRefeicoes(): string {
    return 'Mock';
  }
}

export abstract class BebidaService {
  obterBebidas!: () => string; 
}
