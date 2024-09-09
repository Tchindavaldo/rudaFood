import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';


import { PannierTobuyPageModule } from '../homeComponents/pannier-tobuy/pannier-tobuy.module';
import { PannierAchatPageModule } from '../homeComponents/pannier-achat/pannier-achat.module';
import { LoginPageModule } from '../homeComponents/login/login.module';
import { MarchandHeaderPageModule } from '../homeComponents/marchand-header/marchand-header.module';
import { Item3Component } from '../homeComponents/item3/item3.component';
import { Item2Component } from '../homeComponents/item2/item2.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,


    
    Item2Component,
    Item3Component,

    MarchandHeaderPageModule,
    LoginPageModule,
    PannierAchatPageModule,
    PannierTobuyPageModule,
  ],
  declarations: [Tab1Page],
  
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1PageModule {}
