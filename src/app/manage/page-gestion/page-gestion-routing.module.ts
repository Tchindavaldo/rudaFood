import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageGestionPage } from './page-gestion.page';

const routes: Routes = [
  {
    path: '',
    component: PageGestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageGestionPageRoutingModule {}
