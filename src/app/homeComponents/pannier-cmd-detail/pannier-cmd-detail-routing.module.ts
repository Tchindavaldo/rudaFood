import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PannierCmdDetailPage } from './pannier-cmd-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PannierCmdDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PannierCmdDetailPageRoutingModule {}
