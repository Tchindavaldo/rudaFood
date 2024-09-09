import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CmdStatutPageRoutingModule } from './cmd-statut-routing.module';

import { CmdStatutPage } from './cmd-statut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CmdStatutPageRoutingModule
  ],
  declarations: [CmdStatutPage],
  exports:[CmdStatutPage]
})
export class CmdStatutPageModule {}
