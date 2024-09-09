import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthVerifyNumberPageRoutingModule } from './auth-verify-number-routing.module';

import { AuthVerifyNumberPage } from './auth-verify-number.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthVerifyNumberPageRoutingModule
  ],
  declarations: [AuthVerifyNumberPage]
})
export class AuthVerifyNumberPageModule {}
