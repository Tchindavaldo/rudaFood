import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CmdBottomCardPage } from './cmd-bottom-card.page';

const routes: Routes = [
  {
    path: '',
    component: CmdBottomCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmdBottomCardPageRoutingModule {}
