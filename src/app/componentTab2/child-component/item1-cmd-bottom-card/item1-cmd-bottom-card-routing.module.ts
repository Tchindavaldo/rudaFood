import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item1CmdBottomCardPage } from './item1-cmd-bottom-card.page';

const routes: Routes = [
  {
    path: '',
    component: Item1CmdBottomCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item1CmdBottomCardPageRoutingModule {}
