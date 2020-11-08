import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAnnouncementsPageRoutingModule } from './view-announcements-routing.module';

import { ViewAnnouncementsPage } from './view-announcements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAnnouncementsPageRoutingModule
  ],
  declarations: [ViewAnnouncementsPage]
})
export class ViewAnnouncementsPageModule {}
