import { environment } from './../../../environments/environment';
import { PRODUITS } from './mock-service';
import { CHARGES } from 'src/app/core/services/mock-service';
import { Mouvement } from './../models/mouvement';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  resultatTotal: number = 0;
  charges: Mouvement[] = CHARGES;
  produits: Mouvement[] = PRODUITS;
  taux: number = environment.tauxDeChange;
  constructor() { }

  getTotalCharges(): number{
    const montantCharges:number[] = this.charges.map(ee =>{
      return ee.isDollar ? ee.montant * this.taux : ee.montant
    });
    const totalCharges = montantCharges.reduce((a, b)=>{
            return a + b;
          });
    return totalCharges;
  }

  getTotalProduits(): number{
    const montantProduits:number[] = this.produits.map(ee => {
      return ee.isDollar ? ee.montant * this.taux : ee.montant
    });
    const totalProduits = montantProduits.reduce((a, b)=>{
            return a + b;
          });
    return totalProduits;
  }

  getResultat(): number{
    return this.getTotalProduits() - this.getTotalCharges();
  }

  getChargeMois(index: number): Mouvement[]{
    return this.charges.filter(ee => new Date(ee.date).getMonth() == index - 1);
  }

  getProduitMois(index: number): Mouvement[]{
    return this.produits.filter(ee => new Date(ee.date).getMonth() == index -1);
  }

  getTotalChagesParMois(index: number): number{
    const mouvements: Mouvement[] = this.getChargeMois(index);
    if(mouvements.length == 0){
      return 0;
    }
    const montantCharges: number[] = mouvements.map(ee=>{
      return ee.isDollar ? ee.montant * environment.tauxDeChange : ee.montant;
    })
    const total = montantCharges.reduce((a, b) => {
      return a + b;
    })
    return total;
  }

  getTotalProduitsParMois(index: number): number{
    const mouvements: Mouvement[] = this.getProduitMois(index);
    if(mouvements.length == 0){
      return 0;
    }
    const montantCharges: number[] = mouvements.map(ee=>{
      return ee.isDollar ? ee.montant * environment.tauxDeChange : ee.montant;
    })
    const total = montantCharges.reduce((a, b) => {
      return a + b;
    })
    return total;
  }
}
