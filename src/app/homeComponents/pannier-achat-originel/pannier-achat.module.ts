import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PannierAchatPageRoutingModule } from './pannier-achat-routing.module';

import { PannierAchatPage } from './pannier-achat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PannierAchatPageRoutingModule,
  ],
  declarations: [PannierAchatPage],
  exports: [PannierAchatPage],
})
export class PannierAchatPageModule {}
