import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPendingShareesPage } from './admin-pending-sharees.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPendingShareesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPendingShareesPageRoutingModule {}
