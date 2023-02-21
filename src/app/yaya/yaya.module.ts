import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YayaRoutingModule } from './yaya-routing.module';
import { HomeModule } from './home/home.module';
import { EtatFinanciersModule } from './etat-financiers/etat-financiers.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    YayaRoutingModule,
    HomeModule,
    EtatFinanciersModule,
    AboutModule
  ]
})
export class YayaModule { }
