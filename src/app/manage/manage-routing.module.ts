import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagePage } from './manage.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: ManagePage
  // },
  {
    path: 'cmd-action',
    loadChildren: () => import('./cmd-action/cmd-action.module').then( m => m.CmdActionPageModule)
  },
 
  {
    path: 'page-list-cmd-fast-food',
    loadChildren: () => import('./page-list-cmd-fast-food/page-list-cmd-fast-food.module').then( m => m.PageListCmdFastFoodPageModule)
  }, 
  {
    path: 'page-list-menu-fast-food',
    loadChildren: () => import('./page-list-menu-fast-food/page-list-menu-fast-food.module').then( m => m.PageListMenuFastFoodPageModule)
  },
 
  { 
  path: '',
  redirectTo: 'page-list-cmd-fast-food',
  pathMatch: 'full'
},
 
  {
    path: 'page-dispo',
    loadChildren: () => import('./page-dispo/page-dispo.module').then( m => m.PageDispoPageModule)
  },
  {
    path: 'page-delete',
    loadChildren: () => import('./page-delete/page-delete.module').then( m => m.PageDeletePageModule)
  },
  {
    path: 'page-list',
    loadChildren: () => import('./page-list/page-list.module').then( m => m.PageListPageModule)
  },
  {
    path: 'page-gestion',
    loadChildren: () => import('./page-gestion/page-gestion.module').then( m => m.PageGestionPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagePageRoutingModule {}
