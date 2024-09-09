import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PannierCmdDetail2Page } from './pannier-cmd-detail2.page';

const routes: Routes = [
  {
    path: '',
    component: PannierCmdDetail2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PannierCmdDetail2PageRoutingModule {}
