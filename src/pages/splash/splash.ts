import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  public splashConfig: Object;

  constructor(public viewCtrl: ViewController, public splashScreen: SplashScreen) {

    this.splashConfig = {
      loop: false,
      prerender: true,
      autoplay: true,
      autoloadSegments: true,
      path: 'assets/animations/splash/splash.json'
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

  ionViewDidEnter() {
 
    // hide default splash screen
    this.splashScreen.hide();



    // hide our animated splash page
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 6000);
 
  }

}
