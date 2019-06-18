import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleCdPage } from './single-cd/single-cd';

@Component({
  selector: 'page-cd',
  templateUrl: 'cds.html'
})
export class CdsPage {

  constructor(private navCtrl: NavController) {}

  onLoadCd(name: string) {
    this.navCtrl.push(SingleCdPage, {CdName: name});
  }
}