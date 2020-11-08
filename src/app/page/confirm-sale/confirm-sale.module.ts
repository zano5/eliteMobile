import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmSalePageRoutingModule } from './confirm-sale-routing.module';

import { ConfirmSalePage } from './confirm-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmSalePageRoutingModule
  ],
  declarations: [ConfirmSalePage]
})
export class ConfirmSalePageModule {}
