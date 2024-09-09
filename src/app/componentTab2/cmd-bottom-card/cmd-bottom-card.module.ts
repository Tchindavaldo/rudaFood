import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CmdBottomCardPageRoutingModule } from './cmd-bottom-card-routing.module';

import { CmdBottomCardPage } from './cmd-bottom-card.page';
import { Item1CmdBottomCardPageModule } from '../child-component/item1-cmd-bottom-card/item1-cmd-bottom-card.module';
import { Item2CmdBottomCardPageModule } from '../child-component/item2-cmd-bottom-card/item2-cmd-bottom-card.module';
import { Item3CmdBottomCardPageModule } from '../child-component/item3-cmd-bottom-card/item3-cmd-bottom-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CmdBottomCardPageRoutingModule,
    Item1CmdBottomCardPageModule,
    Item2CmdBottomCardPageModule,
    Item3CmdBottomCardPageModule
  ],
  declarations: [CmdBottomCardPage],
  exports:[CmdBottomCardPage]
})
export class CmdBottomCardPageModule {}
