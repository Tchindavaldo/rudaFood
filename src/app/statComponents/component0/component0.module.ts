import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Component0PageRoutingModule } from './component0-routing.module';

import { Component0Page } from './component0.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Component0PageRoutingModule
  ],
  declarations: [Component0Page],
  exports:[Component0Page]
})
export class Component0PageModule {}
