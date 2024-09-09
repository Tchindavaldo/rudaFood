import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PannierCmdDetail2PageRoutingModule } from './pannier-cmd-detail2-routing.module';

import { PannierCmdDetail2Page } from './pannier-cmd-detail2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PannierCmdDetail2PageRoutingModule,
  ],
  declarations: [PannierCmdDetail2Page],
  exports: [PannierCmdDetail2Page],
})
export class PannierCmdDetail2PageModule {}
