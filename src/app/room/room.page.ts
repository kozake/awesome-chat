import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
      } else {
        this.navCtrl.goRoot('signin');
      }
    });
  }

  async signOut() {
    try {
      await firebase.auth().signOut();
      this.navCtrl.goRoot('signin');

    } catch (error) {}
  }
}
