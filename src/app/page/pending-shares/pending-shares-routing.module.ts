import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingSharesPage } from './pending-shares.page';

const routes: Routes = [
  {
    path: '',
    component: PendingSharesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingSharesPageRoutingModule {}
