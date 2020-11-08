import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAnnouncementsPage } from './view-announcements.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAnnouncementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAnnouncementsPageRoutingModule {}
