import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleCdPage } from './single-cd/single-cd';

@Component({
  selector: 'page-cd',
  templateUrl: 'cds.html'
})
export class CdsPage {

  constructor(private navCtrl: NavController) {}

  cdsList = [
    {
      name: 'The Hypnoflip Invasion',
      artist: 'Stupeflip',
      image: 'the-hypnoflip-invasion.jpg',
    },
    {
      name: 'A Night at the Opera',
      artist: 'Queen',
      image: 'a-night-at-the-opera.jpg',
    },
    {
      name: 'Manifestation',
      artist: 'Oxidaksi',
      image: 'manifestation.jpg',
    }
  ];

  onLoadCd(cd: {name: string, artist: string, image: string}) {
    this.navCtrl.push(SingleCdPage, {cd: cd});
  }
}