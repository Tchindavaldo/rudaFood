import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item1CmdBottomCardPageRoutingModule } from './item1-cmd-bottom-card-routing.module';

import { Item1CmdBottomCardPage } from './item1-cmd-bottom-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item1CmdBottomCardPageRoutingModule
  ],
  declarations: [Item1CmdBottomCardPage],
  exports:[Item1CmdBottomCardPage]
})
export class Item1CmdBottomCardPageModule {}
