import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from './../../../shared/shared.module';
import { SharedEtatFinanciersModule } from './../shared-etat-financiers/shared-etat-financiers.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { ProduitsComponent } from './components/produits/produits.component';
import { GraphiqueComponent } from './components/graphique/graphique.component';
import { ListeComponent } from './components/liste/liste.component';


@NgModule({
  declarations: [
    ProduitsComponent,
    GraphiqueComponent,
    ListeComponent
  ],
  imports: [
    CommonModule,
    ProduitsRoutingModule,
    SharedEtatFinanciersModule,
    SharedModule,
    NgChartsModule
  ]
})
export class ProduitsModule { }
