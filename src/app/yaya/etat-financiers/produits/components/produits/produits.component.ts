import { environment } from 'src/environments/environment';
import { DataService } from './../../../../../core/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  totalProduits!: number;
  totalProdDollar!: number;
  taux: number = environment.tauxDeChange;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.totalProduits = this.dataService.getTotalProduits();
    this.totalProdDollar = this.totalProduits / this.taux;

  }

}
