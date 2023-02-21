import { DataService } from './../../../../../core/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corps',
  templateUrl: './corps.component.html',
  styleUrls: ['./corps.component.css']
})
export class CorpsComponent implements OnInit {

  totalCharges!: number;
  totalProduits!: number;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.totalCharges = this.dataService.getTotalCharges();
    this.totalProduits = this.dataService.getTotalProduits();
  }

}
