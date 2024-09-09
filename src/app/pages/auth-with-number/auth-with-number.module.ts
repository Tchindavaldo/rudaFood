import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthWithNumberPageRoutingModule } from './auth-with-number-routing.module';

import { AuthWithNumberPage } from './auth-with-number.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthWithNumberPageRoutingModule
  ],
  declarations: [AuthWithNumberPage]
})
export class AuthWithNumberPageModule {}
