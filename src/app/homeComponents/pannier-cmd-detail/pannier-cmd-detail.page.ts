import { Component, Input, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pannier-cmd-detail',
  templateUrl: './pannier-cmd-detail.page.html',
  styleUrls: ['./pannier-cmd-detail.page.scss'],
})
export class PannierCmdDetailPage implements OnInit {
  @Input() textLigne1 = 'haricot';
  @Input() textLigne2:string|number = '100f';
  @Input() iconIshow = true
  @Input() labelIshow = false
  @Input() sizeLabel = '12px'
  @Input() paddingright = ''
  @Input() backgroundChip = ''
  @Input() shadow = ''
  @Input() black = ''

  constructor(
    private cardControle:CardService,
    private dataService : DataService
  ) {}
  ngOnInit() {}

  public hideBottomCard() {
    this.cardControle.hideBottomCard1('bottom-card-home')
    
    // this.cardIsShow=this.cardControle.bottomCardIsShow
    console.log('click to hode');
  }

  actionToCmd(action:string)
  {
    if (action=="buy") {
      this.cardControle.cmd.isBuy = true
      this.cardControle.cmd.ispending = false
      this.dataService.user.cmd.push(this.cardControle.cmd)
    }
    if (action=="pannier") {
      this.cardControle.cmd.isBuy = false
      this.cardControle.cmd.ispending = true
      this.dataService.user.cmd.push(this.cardControle.cmd)
    }
  this.hideBottomCard()
  }
}
