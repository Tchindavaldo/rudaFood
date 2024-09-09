import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthVerifyNumberPage } from './auth-verify-number.page';

const routes: Routes = [
  {
    path: '',
    component: AuthVerifyNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthVerifyNumberPageRoutingModule {}
