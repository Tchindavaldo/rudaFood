import { Users } from "./Users";
import { Menu } from "./menu";

export class generalDataUser
 {
  nbrTotalUser: number;
  utilisateurConnecte:number;
   nbrTotalCommande: number;
   montantTotalCmd: number

  constructor(nbrTotalUser: number,
    utilisateurConnecte:number,
     nbrTotalCommande: number,
     montantTotalCmd: number) {
    this.nbrTotalUser = nbrTotalUser;
    this.utilisateurConnecte = utilisateurConnecte;
    this.nbrTotalCommande = nbrTotalCommande;
    this.montantTotalCmd = montantTotalCmd;
  }


}
