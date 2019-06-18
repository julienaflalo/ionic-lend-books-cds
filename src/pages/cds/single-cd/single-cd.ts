import { HardDbService } from './../../../services/hard-db.service';
import { Cd } from './../../../models/Cd';
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-single-cd',
  templateUrl: 'single-cd.html',
})
export class SingleCdPage {

  index: number;
  cd : Cd;

  constructor(public navParams: NavParams, public viewCtrl : ViewController, public hardDbService: HardDbService) {
  }

  ngOnInit() {
    this.index = this.navParams.get("index");
    this.cd =this.hardDbService.cdsList[this.index];
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleCd(){
    this.cd.isAvailable = !this.cd.isAvailable;
  }

}
