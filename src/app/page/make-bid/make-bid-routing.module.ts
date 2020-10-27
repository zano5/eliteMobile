import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeBidPage } from './make-bid.page';

const routes: Routes = [
  {
    path: '',
    component: MakeBidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeBidPageRoutingModule {}
