import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { ChartsModule } from 'ng2-charts';


import { IonicModule } from '@ionic/angular';

import { AdminUsersPageRoutingModule } from './admin-users-routing.module';

import { AdminUsersPage } from './admin-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // ChartsModule,
    AdminUsersPageRoutingModule
  ],
  declarations: [AdminUsersPage]
})
export class AdminUsersPageModule {}
