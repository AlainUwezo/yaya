import { TableComponent } from './components/table/table.component';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    TopbarComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgChartsModule
  ],
  exports: [
    TopbarComponent,
    TableComponent
  ]
})
export class SharedEtatFinanciersModule { }
