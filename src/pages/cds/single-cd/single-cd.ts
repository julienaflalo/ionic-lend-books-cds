import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-single-cd',
  templateUrl: 'single-cd.html',
})
export class SingleCdPage {

  name: string;

  constructor(public navParams: NavParams) {
  }

  ngOnInit() {
    this.name = this.navParams.get('CdName');
  }

}
