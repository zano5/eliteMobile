import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmSalePage } from './confirm-sale.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmSalePageRoutingModule {}
