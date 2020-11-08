import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPendingShareesPageRoutingModule } from './admin-pending-sharees-routing.module';

import { AdminPendingShareesPage } from './admin-pending-sharees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPendingShareesPageRoutingModule
  ],
  declarations: [AdminPendingShareesPage]
})
export class AdminPendingShareesPageModule {}
