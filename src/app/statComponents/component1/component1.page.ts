import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.page.html',
  styleUrls: ['./component1.page.scss'],
})
export class Component1Page implements OnInit {

  constructor() { }

  @Input() text1 = '12'
  @Input() text2 = 'cmd'
  @Input() text3 = 'Commande Effectuer'
  @Input() text2Color = ''
  ngOnInit() {
  }

}
