import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncentiveWalletPage } from './incentive-wallet.page';

const routes: Routes = [
  {
    path: '',
    component: IncentiveWalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncentiveWalletPageRoutingModule {}
