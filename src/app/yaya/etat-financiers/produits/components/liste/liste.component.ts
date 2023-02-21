import { DataService } from './../../../../../core/services/data.service';
import { PRODUITS } from './../../../../../core/services/mock-service';
import { Mouvement } from './../../../../../core/models/mouvement';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  itemActivated: Boolean = false;
  produitsJanvier!: Mouvement[];
  produitsFevrier!: Mouvement[];
  produitsMars!: Mouvement[];
  produitsAvril!: Mouvement[];
  produitsMai!: Mouvement[];
  produitsJuin!: Mouvement[];
  produitsJuillet!: Mouvement[];
  produitsAout!: Mouvement[];
  produitsSeptembre!: Mouvement[];
  produitsOctobre!: Mouvement[];
  produitsNovembre!: Mouvement[];
  produitsDecembre!: Mouvement[];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // On filtre le mois en fonction du mois - 1 car js compte les mois a partir de 0
    this.produitsJanvier = this.dataService.getProduitMois(1);
    this.produitsFevrier = this.dataService.getProduitMois(2);
    this.produitsMars = this.dataService.getProduitMois(3);
    this.produitsAvril = this.dataService.getProduitMois(4);
    this.produitsMai = this.dataService.getProduitMois(5);
    this.produitsJuin = this.dataService.getProduitMois(6);
    this.produitsJuillet = this.dataService.getProduitMois(7);
    this.produitsAout = this.dataService.getProduitMois(8);
    this.produitsSeptembre = this.dataService.getProduitMois(9);
    this.produitsOctobre = this.dataService.getProduitMois(10);;
    this.produitsNovembre = this.dataService.getProduitMois(11);
    this.produitsDecembre = this.dataService.getProduitMois(12);
  }

  onClickListItem(element: HTMLElement){
    element.classList.toggle('itemActivated');
  }

  isActivatedItem(element: HTMLElement): Boolean{
    return element.classList.contains('itemActivated');
  }
}
