import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Component3Page } from './component3.page';

const routes: Routes = [
  {
    path: '',
    component: Component3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Component3PageRoutingModule {}
