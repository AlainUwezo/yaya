import { DataService } from './../../../../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.css'],
})
export class GraphiqueComponent implements OnInit {
  chargeData: ChartData<'line'> = {
    labels: [
      'Jan',
      'Fev',
      'Mar',
      'Avr',
      'Mai',
      'Juin',
      'Juillet',
      'août',
      'sept',
      'oct',
      'nov',
      'déc',
    ],
    datasets: [
      {
        label: 'Charges mensuel',
        data: [
          1000, 1220, 900, 600, 7620, 1670, 8900, 900, 1400, 920, 9200, 1200,
        ],
        pointBackgroundColor: 'white',
        pointBorderColor: 'red',
        borderColor: 'orange',
        backgroundColor: 'white',
        pointHoverBackgroundColor: 'black',
      },
    ],
  };

  chargeDataOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Charges par mois',
      },
    },
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    for (var i = 0; i < 12; i++) {
      this.chargeData.datasets[0].data[i] =
        this.dataService.getTotalChagesParMois(i + 1);
    }
  }
}
