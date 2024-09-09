import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'porte-feuil-historique',
    loadChildren: () => import('../homeComponents/porte-feuil-historique/porte-feuil-historique.module').then( m => m.PorteFeuilHistoriquePageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'historique',
    loadChildren: () => import('./historique/historique.module').then( m => m.HistoriquePageModule)
  },
  // {
  //   path: 'manage',
  //   loadChildren: () => import('../manage/manage.module').then( m => m.ManagePageModule)
  // },

  {
    path: 'sup',
    loadChildren: () => import('../manage/page-delete/page-delete-routing.module').then(m => m.PageDeletePageRoutingModule)
  },
  {
    path: 'commande',
    loadChildren: () => import('../manage/page-list-cmd-fast-food/page-list-cmd-fast-food.module').then(m => m.PageListCmdFastFoodPageModule)
  },
    {
    path: 'menu',
    loadChildren: () => import('../manage/page-list-menu-fast-food/page-list-menu-fast-food-routing.module').then(m=>m.PageListMenuFastFoodPageRoutingModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'commande',
  //   pathMatch: 'full'
  // },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
