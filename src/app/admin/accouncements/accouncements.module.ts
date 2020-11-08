import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccouncementsPageRoutingModule } from './accouncements-routing.module';

import { AccouncementsPage } from './accouncements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccouncementsPageRoutingModule
  ],
  declarations: [AccouncementsPage]
})
export class AccouncementsPageModule {}
