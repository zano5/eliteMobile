import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewBidsPageRoutingModule } from './view-bids-routing.module';

import { ViewBidsPage } from './view-bids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewBidsPageRoutingModule
  ],
  declarations: [ViewBidsPage]
})
export class ViewBidsPageModule {}
