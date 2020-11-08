import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserBankPage } from './user-bank.page';

const routes: Routes = [
  {
    path: '',
    component: UserBankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserBankPageRoutingModule {}
