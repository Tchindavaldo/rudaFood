 import { Menu } from "./menu";

  export class Commande2 {
  idCmd = 0;
  menu = new Menu('menu1',1500,2000,3000,'option1','option2','option3','photo','dispo');
  quantite = 0;
  embalage : embalage[] ;
  boisson :  boisson;
  livraison :  livraison;
  prixTotal = 0
  staut='ispending'; 
  
  constructor(
    idCmd:number,
    menu: Menu,
    quantite :number,
    embalage : embalage[],
    boisson : boisson,
    livraison : livraison,
    prixTotal = 0,
    staut='ispending' 
  
  ) {
    this.idCmd = idCmd;
    this.menu = menu;
    this.quantite = quantite;
    this.embalage = embalage;
    this.boisson = boisson;
    this.livraison = livraison;
    this.prixTotal = prixTotal;
    this.staut=staut; 
  }
}
export class embalage {
 type = ''
 prix = 0 ;

 constructor(
  type : string,
 prix : number
 
 ) {
   this.type = type; 
   this.prix = prix;
 }
}
export class boisson {
  type = ''
  prix = 0 ;
 
  constructor(
   type : string,
  prix : number
  
  ) {
    this.type = type; 
    this.prix = prix;
  }
}
export class livraison {
  statut : boolean
  prix = 0 ;
 
  constructor(
    statut : boolean,
  prix : number
  
  ) {
    this.statut = statut; 
    this.prix = prix;
  }
}
