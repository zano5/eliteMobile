import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminUserModalPageRoutingModule } from './admin-user-modal-routing.module';

import { AdminUserModalPage } from './admin-user-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminUserModalPageRoutingModule
  ],
  declarations: [AdminUserModalPage]
})
export class AdminUserModalPageModule {}
