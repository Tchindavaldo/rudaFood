import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageListCmdFastFoodPage } from './page-list-cmd-fast-food.page';

const routes: Routes = [
  {
    path: '',
    component: PageListCmdFastFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageListCmdFastFoodPageRoutingModule {}
