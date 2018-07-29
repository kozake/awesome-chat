import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDubXW4Ylga9xJrBr2raEBs45bbPm9xyT0',
  authDomain: 'awesome-chat-2b88d.firebaseapp.com',
  databaseURL: 'https://awesome-chat-2b88d.firebaseio.com',
  projectId: 'awesome-chat-2b88d',
  storageBucket: 'awesome-chat-2b88d.appspot.com',
  messagingSenderId: '544074400018'
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
