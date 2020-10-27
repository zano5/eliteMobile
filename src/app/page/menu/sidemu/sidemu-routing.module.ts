import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidemuPage } from './sidemu.page';

const routes: Routes = [
  {
    path: '',
    component: SidemuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidemuPageRoutingModule {}
