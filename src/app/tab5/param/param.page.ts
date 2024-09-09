import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-param',
  templateUrl: './param.page.html',
  styleUrls: ['./param.page.scss'],
})
export class ParamPage implements OnInit {
 
  @Input() iconn = 'alert-circle-outline'
  @Input() titre = 'Commande enregistrer'

  constructor() { }

  ngOnInit() {
  }

}
