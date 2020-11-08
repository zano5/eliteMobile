import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoughtSharesPage } from './bought-shares.page';
import { MomentModule } from 'ngx-moment';


const routes: Routes = [
  {
    path: '',
    component: BoughtSharesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    })],
  exports: [RouterModule],
})
export class BoughtSharesPageRoutingModule {}
