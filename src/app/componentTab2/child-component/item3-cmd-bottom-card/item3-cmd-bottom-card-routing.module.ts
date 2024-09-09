import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item3CmdBottomCardPage } from './item3-cmd-bottom-card.page';

const routes: Routes = [
  {
    path: '',
    component: Item3CmdBottomCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item3CmdBottomCardPageRoutingModule {}
