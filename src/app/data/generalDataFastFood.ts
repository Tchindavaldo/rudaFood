import { Users } from "./Users";
import { Menu } from "./menu";

export class generalDataFastFood {
  nbrTotalFastFood: number;
  commande: number;
  montant: number;

  constructor(nbrTotalFastFood: number, commande: number, montant: number) {
    this.nbrTotalFastFood = nbrTotalFastFood;
    this.commande = commande;
    this.montant = montant;
  }


}
