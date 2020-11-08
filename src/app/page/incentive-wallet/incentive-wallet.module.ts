import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncentiveWalletPageRoutingModule } from './incentive-wallet-routing.module';

import { IncentiveWalletPage } from './incentive-wallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncentiveWalletPageRoutingModule
  ],
  declarations: [IncentiveWalletPage]
})
export class IncentiveWalletPageModule {}
