import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CmdActionPageRoutingModule } from './cmd-action-routing.module';

import { CmdActionPage } from './cmd-action.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CmdActionPageRoutingModule
  ],
  declarations: [CmdActionPage],
  exports:[CmdActionPage]
})
export class CmdActionPageModule {}
