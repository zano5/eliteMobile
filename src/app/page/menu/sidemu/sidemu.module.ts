import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidemuPageRoutingModule } from './sidemu-routing.module';

import { SidemuPage } from './sidemu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidemuPageRoutingModule
  ],
  declarations: [SidemuPage]
})
export class SidemuPageModule {}
