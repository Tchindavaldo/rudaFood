import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageGestionPageRoutingModule } from './page-gestion-routing.module';

import { PageGestionPage } from './page-gestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageGestionPageRoutingModule
  ],
  declarations: [PageGestionPage]
})
export class PageGestionPageModule {}
