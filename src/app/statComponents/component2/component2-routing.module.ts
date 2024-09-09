import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Component2Page } from './component2.page';

const routes: Routes = [
  {
    path: '',
    component: Component2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Component2PageRoutingModule {}
