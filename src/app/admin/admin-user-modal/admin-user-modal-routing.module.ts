import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUserModalPage } from './admin-user-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AdminUserModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminUserModalPageRoutingModule {}
