import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarchandHeaderPageRoutingModule } from './marchand-header-routing.module';

import { MarchandHeaderPage } from './marchand-header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarchandHeaderPageRoutingModule,
  ],
  declarations: [MarchandHeaderPage],
  exports: [MarchandHeaderPage],
})
export class MarchandHeaderPageModule {}
