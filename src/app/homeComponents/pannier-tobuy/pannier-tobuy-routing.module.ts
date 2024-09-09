import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PannierTobuyPage } from './pannier-tobuy.page';

const routes: Routes = [
  {
    path: '',
    component: PannierTobuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PannierTobuyPageRoutingModule {}
