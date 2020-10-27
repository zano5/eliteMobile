import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminSignInPageRoutingModule } from './admin-sign-in-routing.module';

import { AdminSignInPage } from './admin-sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminSignInPageRoutingModule
  ],
  declarations: [AdminSignInPage]
})
export class AdminSignInPageModule {}
