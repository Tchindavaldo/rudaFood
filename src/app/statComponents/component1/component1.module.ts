import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Component1PageRoutingModule } from './component1-routing.module';

import { Component1Page } from './component1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Component1PageRoutingModule
  ],
  declarations: [Component1Page],
  exports:[Component1Page]
})
export class Component1PageModule {}
