import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-item3-cmd-bottom-card',
  templateUrl: './item3-cmd-bottom-card.page.html',
  styleUrls: ['./item3-cmd-bottom-card.page.scss'],
})
export class Item3CmdBottomCardPage implements OnInit {
  @Input() titre = 'Mayonaise';

  constructor() { }

  ngOnInit() {
  }

}
