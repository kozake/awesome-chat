import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBLcdUiqQdqmARt_tRRvjUhmmZfFMHpNto',
  authDomain: 'awesome-chat-f7118.firebaseapp.com',
  databaseURL: 'https://awesome-chat-f7118.firebaseio.com',
  projectId: 'awesome-chat-f7118',
  storageBucket: 'awesome-chat-f7118.appspot.com',
  messagingSenderId: '32939361989'
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
