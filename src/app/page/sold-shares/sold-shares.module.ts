import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoldSharesPageRoutingModule } from './sold-shares-routing.module';

import { SoldSharesPage } from './sold-shares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoldSharesPageRoutingModule
  ],
  declarations: [SoldSharesPage]
})
export class SoldSharesPageModule {}
