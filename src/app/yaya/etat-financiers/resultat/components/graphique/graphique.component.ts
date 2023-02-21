import { DataService } from './../../../../../core/services/data.service';
import { ChartData, ChartOptions } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.css']
})
export class GraphiqueComponent implements OnInit {

  resultatData: ChartData<'doughnut'> = {
    labels: ['Charges', 'Produits', 'Résultat'],
    datasets: [
      { label: 'Données',
        data: [1000, 1200, 200],
        backgroundColor: ['rgb(255, 100, 100)', 'skyblue', 'rgb(100, 150, 100)'],
     },
    ],
  }

  resultatDataOptions: ChartOptions = {
    responsive: true,
    backgroundColor: 'transparent',
    plugins: {
      title: {
        display: true,
        text: 'Résultat',
      },
    },
  };
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.resultatData.datasets[0].data[0] = this.dataService.getTotalCharges();
    this.resultatData.datasets[0].data[1] = this.dataService.getTotalProduits();
    this.resultatData.datasets[0].data[2] = this.dataService.getResultat();
  }

}
