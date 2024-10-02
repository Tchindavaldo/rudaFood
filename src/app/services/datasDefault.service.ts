import { Injectable } from "@angular/core"
import { boisson, Commande, embalage, livraison } from "../data/commande"
import { Menu } from "../data/menu"

@Injectable
(
       {
              providedIn:'root'
       }
)

export class defaultData 
{

       
       prixTotal = 0
       quantiteCmd = 0
       livraison = new livraison(false,0)
       boisson = new boisson('djino',700) 
       
       embalage = [new embalage('gamelle',100),new embalage('sac platique',100)]
       menu = new Menu('',0,0,0,'','optionPrix2','optionPrix3','image','disponibilite')
       cmd:Commande = new Commande('uid1',0,0,this.menu,this.quantiteCmd,this.embalage,this.boisson,this.livraison,this.prixTotal,'isPendingToFastFood',false,true)
       cmdTab:Commande[] = [new Commande('uid1',0,0,this.menu,this.quantiteCmd,this.embalage,this.boisson,this.livraison,this.prixTotal,'isPendingToFastFood',false,true)]
       


}