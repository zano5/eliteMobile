import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoughtSharesPageRoutingModule } from './bought-shares-routing.module';

import { BoughtSharesPage } from './bought-shares.page';
import { MomentModule } from 'ngx-moment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentModule,
    BoughtSharesPageRoutingModule
  ],
  declarations: [BoughtSharesPage]
})
export class BoughtSharesPageModule {}
