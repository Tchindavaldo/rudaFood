import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarchandHeaderPage } from './marchand-header.page';

const routes: Routes = [
  {
    path: '',
    component: MarchandHeaderPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarchandHeaderPageRoutingModule {}
