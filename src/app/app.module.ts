import { LandingComponent } from './component/landing/landing.component';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SidemuPage } from './page/menu/sidemu/sidemu.page';
// import { ChartsModule } from 'ng2-charts';
import { MomentModule } from 'ngx-moment';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';


var firebaseConfig = {
  apiKey: "AIzaSyCtE6VNKCzRHJrYK2d8-84fAF_13VQ3OJs",
  authDomain: "eliteshare-daf6c.firebaseapp.com",
  databaseURL: "https://eliteshare-daf6c.firebaseio.com",
  projectId: "eliteshare-daf6c",
  storageBucket: "eliteshare-daf6c.appspot.com",
  messagingSenderId: "1066163952",
  appId: "1:1066163952:web:45bc0e837c42dcd51fec35",
  measurementId: "G-KBRSK2H0TW"
};

@NgModule({
  declarations: [AppComponent, SidemuPage, LandingComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    // ChartsModule

    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Deeplinks,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {}
