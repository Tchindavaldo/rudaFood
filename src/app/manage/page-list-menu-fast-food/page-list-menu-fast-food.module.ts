import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageListMenuFastFoodPageRoutingModule } from './page-list-menu-fast-food-routing.module';

import { PageListMenuFastFoodPage } from './page-list-menu-fast-food.page';
import { Component2PageModule } from 'src/app/statComponents/component2/component2.module';
import { Component1PageModule } from 'src/app/statComponents/component1/component1.module';
import { Component0PageModule } from 'src/app/statComponents/component0/component0.module';
import { Component3PageModule } from 'src/app/statComponents/component3/component3.module';
import { FormPageModule } from 'src/app/tab3/form/form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageListMenuFastFoodPageRoutingModule,
    Component2PageModule,
    Component1PageModule,
    Component0PageModule,
    Component3PageModule,
    FormPageModule
  ],
  declarations: [PageListMenuFastFoodPage],
  exports:[PageListMenuFastFoodPage]
})
export class PageListMenuFastFoodPageModule {}
