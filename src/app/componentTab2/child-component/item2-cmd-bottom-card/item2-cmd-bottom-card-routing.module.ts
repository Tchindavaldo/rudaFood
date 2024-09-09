import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item2CmdBottomCardPage } from './item2-cmd-bottom-card.page';

const routes: Routes = [
  {
    path: '',
    component: Item2CmdBottomCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item2CmdBottomCardPageRoutingModule {}
