import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarFactory, BarServices, BebidaService } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    //{ provide: BarServices, useClass: BarServices},
    {
      provide: BarServices, useFactory: BarFactory, 
      deps: [
        HttpClient, /*BAR_UNIDADE_CONFIG */ Injector
      ]
    },
    { provide: BebidaService, useExisting: BarServices}
  ]

})
export class BarComponent implements OnInit {

  configManual!: BarUnidadeConfig;

  config!: BarUnidadeConfig;
 
  barBebidas1!: string;

  barBebidas2!: string;

  dadosUnidade!: string;

  constructor(private barServices: BarServices,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,
    private bebidaService: BebidaService
    ){}
 
  ngOnInit(): void {
    this.barBebidas1 = this.barServices.obterBebidas();

    this.configManual = this.ApiConfigManual;

    this.config = this.ApiConfig;

    this.dadosUnidade = this.barServices.obterUnidade();

    this.barBebidas2 = this.bebidaService.obterBebidas();
  }


}