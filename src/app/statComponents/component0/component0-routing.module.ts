import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Component0Page } from './component0.page';

const routes: Routes = [
  {
    path: '',
    component: Component0Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Component0PageRoutingModule {}
