import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-single-cd',
  templateUrl: 'single-cd.html',
})
export class SingleCdPage {

  cd: {
    name: string,
    artist: string,
    image: string,
  }

  constructor(public navParams: NavParams) {
  }

  ngOnInit() {
    this.cd = this.navParams.get('cd');
  }

}
