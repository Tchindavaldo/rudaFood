import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmd-statut',
  templateUrl: './cmd-statut.page.html',
  styleUrls: ['./cmd-statut.page.scss'],
})
export class CmdStatutPage implements OnInit {
@Input() titre = 'null'
@Input() statut = 'En Attente'
@Input() prix = '1500f'
@Input() backcolor = 'black'
  constructor() { }

  ngOnInit() {

  }

}
