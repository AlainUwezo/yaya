import { environment } from 'src/environments/environment';
import { DataService } from './../../../../../core/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  resultatTotal: number = 0;
  resultatDollar: number = 0;
  taux: number = environment.tauxDeChange;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.resultatTotal = this.dataService.getResultat();
    this.resultatDollar = this.resultatTotal / this.taux;
  }

}
