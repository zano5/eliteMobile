import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidFilterPageRoutingModule } from './bid-filter-routing.module';

import { BidFilterPage } from './bid-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidFilterPageRoutingModule
  ],
  declarations: [BidFilterPage]
})
export class BidFilterPageModule {}
