import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pannier-cmd-detail2',
  templateUrl: './pannier-cmd-detail2.page.html',
  styleUrls: ['./pannier-cmd-detail2.page.scss'],
})
export class PannierCmdDetail2Page implements OnInit {
  @Input() titre = 'Mayonaise';
  constructor() {}

  ngOnInit() {}
}
