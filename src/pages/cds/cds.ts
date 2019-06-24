import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';
import { SingleCdPage } from './single-cd/single-cd';
import { Cd } from './../../models/Cd';

import { HardDbService } from './../../services/hard-db.service';

@Component({
  selector: 'page-cd',
  templateUrl: 'cds.html'
})
export class CdsPage {

  cdsList : Cd[];

  constructor(private modalCtrl: ModalController, private hardDbService: HardDbService, private menuCtrl: MenuController) {}

  ionViewWillEnter(){
    this.cdsList = this.hardDbService.cdsList.slice();
  }
  
  onLoadCd(index: number) {
    let modal = this.modalCtrl.create(SingleCdPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}