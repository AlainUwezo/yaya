import { DataService } from './../../../../../core/services/data.service';
import { ChartData, ChartOptions } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.css']
})
export class GraphiqueComponent implements OnInit {
  produitData: ChartData<'line'> = {
    labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juillet', 'août', 'sept', 'oct', 'nov', 'déc'],
    datasets: [
      { label: 'Charges mensuel',
        data: [1000, 1220, 900, 600, 7620, 1670, 8900, 900, 1400, 920, 9200, 1200],
        borderColor: 'black',
        pointBorderColor: 'orange',
        pointBackgroundColor: 'white',
        pointHoverBackgroundColor: 'orange',
        fill: 'origin',
      },
    ],
  }

  produitDataOptions: ChartOptions = {
    responsive: true,
    backgroundColor: 'transparent',
    plugins: {
      title: {
        display: true
      },
    },
  };

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    for(var i=0; i<12; i++){
      this.produitData.datasets[0].data[i] = this.dataService.getTotalProduitsParMois(i + 1);
    }
  }
}
