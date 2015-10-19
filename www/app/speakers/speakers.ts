import {Page, NavController, ViewController} from 'ionic/ionic';
import {Friends} from '../data/data';
import {SpeakerDetailCtrl} from '../speaker/speaker';

@Page({
  templateUrl: 'app/speakers/speakers.html'
})
export class SpeakersCtrl {
  constructor(friends: Friends, nav: NavController, view: ViewController) {
    this.nav = nav;
    this.view = view;
    this.friends = friends;
    this.speakers = this.friends.all();
  }
  passSpeaker(speaker) {
    this.nav.push(SpeakerDetailCtrl, {
      speaker: speaker
    });
  }

}
