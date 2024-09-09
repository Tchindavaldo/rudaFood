import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PannierStatutPage } from './pannier-statut.page';

const routes: Routes = [
  {
    path: '',
    component: PannierStatutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PannierStatutPageRoutingModule {}
