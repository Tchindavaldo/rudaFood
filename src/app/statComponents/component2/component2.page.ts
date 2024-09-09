import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.page.html',
  styleUrls: ['./component2.page.scss'],
})
export class Component2Page implements OnInit {

  constructor() { }
@Input() shadow = ''
@Input() backgrd = ''
@Input() mLeft = ''
@Input() color1 = ''
@Input() color2 = ''
@Input() text1 = 'LUN'
@Input() text2 = '12'
  ngOnInit() {
  }

}
