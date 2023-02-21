import { DataService } from './../../../../../core/services/data.service';
import { CHARGES } from 'src/app/core/services/mock-service';
import { Mouvement } from './../../../../../core/models/mouvement';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  itemActivated: Boolean = false;
  chargesJanvier!: Mouvement[];
  chargesFevrier!: Mouvement[];
  chargesMars!: Mouvement[];
  chargesAvril!: Mouvement[];
  chargesMai!: Mouvement[];
  chargesJuin!: Mouvement[];
  chargesJuillet!: Mouvement[];
  chargesAout!: Mouvement[];
  chargesSeptembre!: Mouvement[];
  chargesOctobre!: Mouvement[];
  chargesNovembre!: Mouvement[];
  chargesDecembre!: Mouvement[];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // On filtre le mois en fonction du mois - 1 car js compte les mois a partir de 0
    this.chargesJanvier = this.dataService.getChargeMois(1);
    this.chargesFevrier = this.dataService.getChargeMois(2);
    this.chargesMars = this.dataService.getChargeMois(3);
    this.chargesAvril = this.dataService.getChargeMois(4);
    this.chargesMai = this.dataService.getChargeMois(5);
    this.chargesJuin = this.dataService.getChargeMois(6);
    this.chargesJuillet = this.dataService.getChargeMois(7);
    this.chargesAout = this.dataService.getChargeMois(8);
    this.chargesSeptembre = this.dataService.getChargeMois(9);
    this.chargesOctobre = this.dataService.getChargeMois(10);;
    this.chargesNovembre = this.dataService.getChargeMois(11);
    this.chargesDecembre = this.dataService.getChargeMois(12);
  }

  onClickListItem(element: HTMLElement){
    element.classList.toggle('itemActivated');
  }

  isActivatedItem(element: HTMLElement): Boolean{
    return element.classList.contains('itemActivated');
  }
}
