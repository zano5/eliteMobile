import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSignInPage } from './admin-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: AdminSignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSignInPageRoutingModule {}
