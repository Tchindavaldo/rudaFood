import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.page.html',
  styleUrls: ['./notif.page.scss'],
})
export class NotifPage implements OnInit {
  @Input() idxToGet2 = 1
  @Input() iconn = 'pizza'
  @Input() titre = 'Commande enregistrer'
  @Input() valeuNotif = 'la commande que vous venew de passer a ete enregistrer avec success'
  @Input() nbrNotif = 2
  @Input() date = '16h'
 grid = document.getElementsByClassName("gridd") as HTMLCollectionOf<(HTMLElement)>
 label = document.getElementsByClassName("valNotif") as HTMLCollectionOf<(HTMLElement)>
 icon = document.getElementsByClassName("iconNotif") as HTMLCollectionOf<(HTMLElement)>

  constructor() { }

  ngOnInit() {
    

  }

  showLabel(idx:number){
    for (let index = 0; index < this.grid.length; index++) {
       
    this.grid[index].style.background = 'none'
    this.grid[index].style.padding = 'none'
    this.grid[index].style.width = '100%'
    this.grid[index].style.boxShadow = 'none';
    this.grid[index].style.borderRadius = '0';
    this.grid[index].style.margin = '0';

    
    this.label[index].style.overflow = 'hidden'   
    this.label[index].style.height = '11px'
    this.label[index].style.fontSize = '10px';
    this.label[index].style.marginTop = '0px'; 
    this.label[index].style.fontWeight = '300';


    
    this.icon[index].style.background = 'rgba(139, 0, 0, 0.1490196078)';
 
    }

    this.grid[idx].style.background = '#8b00000a'
    this.grid[idx].style.padding = '11px'
    this.grid[idx].style.width = '95%'
    this.grid[idx].style.boxShadow = '0 0 7px 0px red';
    this.grid[idx].style.borderRadius = '31px';
    this.grid[idx].style.margin = '2.5%';


    this.label[idx].style.height = 'max-content'
    this.label[idx].style.overflow = 'visible'
    this.label[idx].style.fontWeight = '400';
    this.label[idx].style.fontSize = '12px';
    this.label[idx].style.marginTop = '2px'; 
    this.label[idx].style.fontWeight = '400';
    
    this.icon[idx].style.background = 'none';
 console.log('idx',idx)
  console.log('idxtg',this.idxToGet2);
  
 
 
  
    }

 }
