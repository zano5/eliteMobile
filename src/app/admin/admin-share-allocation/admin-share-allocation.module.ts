import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminShareAllocationPageRoutingModule } from './admin-share-allocation-routing.module';

import { AdminShareAllocationPage } from './admin-share-allocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminShareAllocationPageRoutingModule
  ],
  declarations: [AdminShareAllocationPage]
})
export class AdminShareAllocationPageModule {}
