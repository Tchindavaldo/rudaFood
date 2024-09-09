import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PannierBonnusPageRoutingModule } from './pannier-bonnus-routing.module';

import { PannierBonnusPage } from './pannier-bonnus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PannierBonnusPageRoutingModule,
  ],
  declarations: [PannierBonnusPage],
  exports: [PannierBonnusPage],
})
export class PannierBonnusPageModule {}
