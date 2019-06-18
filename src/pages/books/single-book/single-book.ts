import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-single-book',
  templateUrl: 'single-book.html',
})
export class SingleBookPage {

  book: {
    name: string,
    author: string,
    image: string,
    description: string
  }

  constructor(public navParams: NavParams) {
  }

  ngOnInit() {
    this.book = this.navParams.get('book');
  }

}
