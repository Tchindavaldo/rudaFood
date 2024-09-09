import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CmdStatutPage } from './cmd-statut.page';

const routes: Routes = [
  {
    path: '',
    component: CmdStatutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class CmdStatutPageRoutingModule {}
