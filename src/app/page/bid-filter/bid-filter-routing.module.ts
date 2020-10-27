import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BidFilterPage } from './bid-filter.page';

const routes: Routes = [
  {
    path: '',
    component: BidFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidFilterPageRoutingModule {}
