import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pannier-achat',
  templateUrl: './pannier-achat.page.html',
  styleUrls: ['./pannier-achat.page.scss'],
})
export class PannierAchatPage implements OnInit {
  constructor() {}
  @Input() widthCard = '';
  @Input() heightCard = '';
  @Input() marginLeftCard = '';

  @Input() backgroundItem = '';
  @Input() paddingTopItem = '';

  @Input() text1Ligne1? = 'Pain amelettes';
  @Input() colorText1Ligne1? = '';

  @Input() text1Ligne2? = 'Modifier';
  @Input() showText1Ligne2? = true;

  @Input() text2Ligne2?: String;
  @Input() showText2Ligne2? = true;

  @Input() text1Ligne3? = '500f';
  @Input() colorText1Ligne3? = '';

  @Input() textIonChip? = '1';
  @Input() colorIonChip? = 'danger';
  @Input() colorIonChip2? = '';
  @Input() backgoundColorIonChip2? = '';
  @Input() showIcon? = true;

  ngOnInit() {}
}
