import { ChargesComponent } from './charges/components/charges/charges.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'etat-financiers', loadChildren: ()=> import('./etat-financiers.module')
      .then(m => m.EtatFinanciersModule)},
  {path: '', redirectTo: 'charges', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtatFinanciersRoutingModule { }
