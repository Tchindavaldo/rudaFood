import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5PageRoutingModule } from './tab5-routing.module';

import { Tab5Page } from './tab5.page';
import { ParamPageModule } from './param/param.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PageRoutingModule,
    ParamPageModule
  ],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}
