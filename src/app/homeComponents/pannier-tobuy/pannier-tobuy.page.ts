import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Commande, boisson, embalage, livraison } from 'src/app/data/commande';
import { Menu } from 'src/app/data/menu';
import { CardService } from 'src/app/services/card.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pannier-tobuy',
  templateUrl: './pannier-tobuy.page.html',
  styleUrls: ['./pannier-tobuy.page.scss'],
})
export class PannierTobuyPage implements OnInit,AfterViewChecked, AfterContentInit,AfterContentChecked {
@Input() menu!:Menu;
@Input() idxFastFood!:number
// @Input() cmd!:Commande;


  // declaration of fata from data
  embalage = [new embalage('gamelle',100),new embalage('sac platique',100)]
  // menu = new Menu('',0,0,0,'')
  quantiteCmd = 0
  prixTotal = 0
  livraison = new livraison(false,0)
  boisson = new boisson('djino',700)
  
    idx!:number
    cmd:Commande = new Commande('uid1',0,0,this.menu,this.quantiteCmd,this.embalage,this.boisson,this.livraison,this.prixTotal,'isPendingToFastFood',false,true)
 

  constructor(
    private data:DataService,
    public cardControl:CardService
  ) { }

  ngOnInit() {
// if (this.menu.prix1) {
// this.menu = this.cardControl.menu
  // console.log('menu prix',this.cardControl.cmd.prixTotal)
  
console.log('menu prix afeter init',this.menu.prix1)
  //  this.prixTotal=this.menu.prix1 + 150

// }
  }
ngAfterContentInit(): void {
  
// this.cmd.menu = this.cardControl.menu
  // console.log('menu prix afeter init',this.cardControl.cmd.prixTotal)
  
console.log('menu prix afeter init',this.menu.prix1)

}
 
ngAfterContentChecked(): void {
  this.bbb()

// this.cmd.menu = this.cardControl.menu
// console.log('menu prix afeter init',this.cardControl.cmd.prixTotal)
// console.log('menu prix afeter content chec',this.menu.prix1)
}
 bbb(){
  
this.cardControl.cmd.menu = this.menu
this.cardControl.cmd.prixTotal = this.menu.prix1 +150
 }


ngAfterViewChecked(): void {
  
// this.cmd.menu = this.cardControl.menu
// console.log('menu prix afeter init',this.cardControl.cmd.prixTotal)
// console.log('menu prix afeter view check',this.menu.prix1)
}





  public hideBottomCard() {
    // this.cardControl.hideBottomCard1('bottom-card-hone')
 
 
    console.log('menu prix',this.menu.prix1)
    
    this.cardControl.action=''
  }


  public hideBottomCard1() {
    // this.cardControl.hideBottomCard1('bottom-card-hone')
    if (this.cardControl.action=='add') {
      
//   const newmenu = new Menu(this.text1, this.text4, this.text5,this.text6,this.text8);
// this.addData(newmenu)
    this.cardControl.action=''
    
    this.cardControl.hideBottomCard1('bottom-card-hone')
    }
    
    if(this.cardControl.action=='update'){
      // this.data.menuTab[this.cardControl.idxToUpdate].titre=this.text1
      // this.data.menuTab[this.cardControl.idxToUpdate].prix1=this.text4
      // this.data.menuTab[this.cardControl.idxToUpdate].prix2=this.text5
      // this.data.menuTab[this.cardControl.idxToUpdate].prix3=this.text6
      // this.data.menuTab[this.cardControl.idxToUpdate].disponibilite=this.text8
  
      // this.updateData(this.service.menuTab)

    this.cardControl.action=''
    
    this.cardControl.hideBottomCard1('bottom-card-hone')
    }
    
  }


}
