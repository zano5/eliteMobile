import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoldSharesPage } from './sold-shares.page';

const routes: Routes = [
  {
    path: '',
    component: SoldSharesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoldSharesPageRoutingModule {}
