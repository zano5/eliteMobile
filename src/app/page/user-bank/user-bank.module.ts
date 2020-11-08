import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserBankPageRoutingModule } from './user-bank-routing.module';

import { UserBankPage } from './user-bank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserBankPageRoutingModule
  ],
  declarations: [UserBankPage]
})
export class UserBankPageModule {}
