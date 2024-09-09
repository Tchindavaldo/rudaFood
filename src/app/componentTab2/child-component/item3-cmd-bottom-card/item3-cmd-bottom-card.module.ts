import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item3CmdBottomCardPageRoutingModule } from './item3-cmd-bottom-card-routing.module';

import { Item3CmdBottomCardPage } from './item3-cmd-bottom-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item3CmdBottomCardPageRoutingModule
  ],
  declarations: [Item3CmdBottomCardPage],
  exports:[Item3CmdBottomCardPage]
})
export class Item3CmdBottomCardPageModule {}
