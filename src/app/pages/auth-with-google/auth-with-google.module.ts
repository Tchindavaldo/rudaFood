import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthWithGooglePageRoutingModule } from './auth-with-google-routing.module';

import { AuthWithGooglePage } from './auth-with-google.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthWithGooglePageRoutingModule
  ],
  declarations: [AuthWithGooglePage]
})
export class AuthWithGooglePageModule {}
