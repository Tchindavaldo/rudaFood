import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Component3PageRoutingModule } from './component3-routing.module';

import { Component3Page } from './component3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Component3PageRoutingModule
  ],
  declarations: [Component3Page],
  exports:[Component3Page]
})
export class Component3PageModule {}
