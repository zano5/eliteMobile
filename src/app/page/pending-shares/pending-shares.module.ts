import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingSharesPageRoutingModule } from './pending-shares-routing.module';

import { PendingSharesPage } from './pending-shares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingSharesPageRoutingModule
  ],
  declarations: [PendingSharesPage]
})
export class PendingSharesPageModule {}
