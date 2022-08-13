import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import  localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin.route';


@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [
  ],
  exports: [
    AdminDashboardComponent
  ]
})
export class AdminModule { }