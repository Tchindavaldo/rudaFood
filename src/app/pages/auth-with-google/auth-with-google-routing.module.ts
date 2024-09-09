import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthWithGooglePage } from './auth-with-google.page';

const routes: Routes = [
  {
    path: '',
    component: AuthWithGooglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthWithGooglePageRoutingModule {}
