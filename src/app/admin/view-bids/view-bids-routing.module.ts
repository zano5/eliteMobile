import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBidsPage } from './view-bids.page';

const routes: Routes = [
  {
    path: '',
    component: ViewBidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewBidsPageRoutingModule {}
