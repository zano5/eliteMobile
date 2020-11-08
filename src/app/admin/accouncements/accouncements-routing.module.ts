import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccouncementsPage } from './accouncements.page';

const routes: Routes = [
  {
    path: '',
    component: AccouncementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccouncementsPageRoutingModule {}
