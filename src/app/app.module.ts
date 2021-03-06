import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Splash - #1
// npm install --save ng-lottie
import { LottieAnimationViewModule } from 'ng-lottie';

// Splash - #2
// Add Splash Page to module

import { SplashPage } from '../pages/splash/splash';

// Splash - #23
// Also add preferrences to config.xml
// <preference name="FadeSplashScreen" value="false"/>
// <preference name="AutoHideSplashScreen" value="false"/>
// <preference name="ShowSplashScreenSpinner" value="false"/>

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashPage
  ],
  imports: [
    BrowserModule,
    LottieAnimationViewModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
