import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtatFinanciersRoutingModule } from './etat-financiers-routing.module';
import { ProduitsModule } from './produits/produits.module';
import { ChargesModule } from './charges/charges.module';
import { ResultatModule } from './resultat/resultat.module';
import { SharedEtatFinanciersModule } from './shared-etat-financiers/shared-etat-financiers.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    EtatFinanciersRoutingModule,
    ProduitsModule,
    ChargesModule,
    ResultatModule,
    SharedEtatFinanciersModule
  ]
})
export class EtatFinanciersModule { }
