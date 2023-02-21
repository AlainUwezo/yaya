import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from './../../../shared/shared.module';
import { ChargesComponent } from './components/charges/charges.component';
import { SharedEtatFinanciersModule } from './../shared-etat-financiers/shared-etat-financiers.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChargesRoutingModule } from './charges-routing.module';
import { GraphiqueComponent } from './components/graphique/graphique.component';
import { ListeComponent } from './components/liste/liste.component';

@NgModule({
  declarations: [
    ChargesComponent,
    GraphiqueComponent,
    ListeComponent
  ],
  imports: [
    CommonModule,
    ChargesRoutingModule,
    SharedEtatFinanciersModule,
    SharedModule,
    NgChartsModule
  ]
})
export class ChargesModule { }
