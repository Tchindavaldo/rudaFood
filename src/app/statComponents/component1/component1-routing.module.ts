import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Component1Page } from './component1.page';

const routes: Routes = [
  {
    path: '',
    component: Component1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Component1PageRoutingModule {}
