import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item2CmdBottomCardPageRoutingModule } from './item2-cmd-bottom-card-routing.module';

import { Item2CmdBottomCardPage } from './item2-cmd-bottom-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item2CmdBottomCardPageRoutingModule
  ],
  declarations: [Item2CmdBottomCardPage],
  exports:[Item2CmdBottomCardPage]
})
export class Item2CmdBottomCardPageModule {}
