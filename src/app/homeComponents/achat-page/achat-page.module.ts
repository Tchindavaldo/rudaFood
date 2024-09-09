import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchatPagePageRoutingModule } from './achat-page-routing.module';

import { AchatPagePage } from './achat-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchatPagePageRoutingModule
  ],
  declarations: [AchatPagePage],
  exports:[AchatPagePage]
})
export class AchatPagePageModule {}
