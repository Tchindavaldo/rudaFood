import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Component2PageRoutingModule } from './component2-routing.module';

import { Component2Page } from './component2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Component2PageRoutingModule
  ],
  declarations: [Component2Page],
  exports: [Component2Page]
})
export class Component2PageModule {}
