import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeBidPageRoutingModule } from './make-bid-routing.module';

import { MakeBidPage } from './make-bid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeBidPageRoutingModule
  ],
  declarations: [MakeBidPage]
})
export class MakeBidPageModule {}
