import {Page, NavParams} from 'ionic/ionic';
import {Injectable} from "angular2/angular2";
@Injectable()
@Page({
  templateUrl: 'app/speaker/speaker.html'
})

export class SpeakerDetailCtrl {
   constructor(params: NavParams) {
    this.speaker = params.get('speaker');
   }


}
