import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriquePageRoutingModule } from './historique-routing.module';

import { HistoriquePage } from './historique.page';
import { PorteFeuilHistoriquePageModule } from 'src/app/homeComponents/porte-feuil-historique/porte-feuil-historique.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriquePageRoutingModule,
    PorteFeuilHistoriquePageModule
  ],
  declarations: [HistoriquePage]
})
export class HistoriquePageModule {}
