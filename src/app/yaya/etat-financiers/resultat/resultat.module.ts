import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from './../../../shared/shared.module';
import { SharedEtatFinanciersModule } from './../shared-etat-financiers/shared-etat-financiers.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultatRoutingModule } from './resultat-routing.module';
import { ResultatComponent } from './components/resultat/resultat.component';
import { GraphiqueComponent } from './components/graphique/graphique.component';
import { CorpsComponent } from './components/corps/corps.component';


@NgModule({
  declarations: [
    ResultatComponent,
    GraphiqueComponent,
    CorpsComponent
  ],
  imports: [
    CommonModule,
    ResultatRoutingModule,
    SharedEtatFinanciersModule,
    SharedModule,
    NgChartsModule
  ]
})
export class ResultatModule { }
