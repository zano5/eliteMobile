import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefferalsPageRoutingModule } from './refferals-routing.module';

import { RefferalsPage } from './refferals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefferalsPageRoutingModule
  ],
  declarations: [RefferalsPage]
})
export class RefferalsPageModule {}
