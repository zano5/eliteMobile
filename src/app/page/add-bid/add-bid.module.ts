import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBidPageRoutingModule } from './add-bid-routing.module';

import { AddBidPage } from './add-bid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBidPageRoutingModule
  ],
  declarations: [AddBidPage]
})
export class AddBidPageModule {}
