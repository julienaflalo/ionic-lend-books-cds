import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-single-book',
  templateUrl: 'single-book.html',
})
export class SingleBookPage {

  name: string;

  constructor(public navParams: NavParams) {
  }

  ngOnInit() {
    this.name = this.navParams.get('bookName');
  }

}
