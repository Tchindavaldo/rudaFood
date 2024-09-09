import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchatPagePage } from './achat-page.page';

const routes: Routes = [
  {
    path: '',
    component: AchatPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchatPagePageRoutingModule {}
