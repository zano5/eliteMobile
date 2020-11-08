import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BroughtPageRoutingModule } from './brought-routing.module';

import { BroughtPage } from './brought.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BroughtPageRoutingModule
  ],
  declarations: [BroughtPage]
})
export class BroughtPageModule {}
