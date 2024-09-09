import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PannierStatutPageRoutingModule } from './pannier-statut-routing.module';

import { PannierStatutPage } from './pannier-statut.page';
import { PannierAchatPageModule } from '../pannier-achat/pannier-achat.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PannierStatutPageRoutingModule,
    PannierAchatPageModule,
  ],
  declarations: [PannierStatutPage],
  exports: [PannierStatutPage],
})
export class PannierStatutPageModule {}
