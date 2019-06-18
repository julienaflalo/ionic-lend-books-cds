import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleBookPage } from './single-book/single-book';

@Component({
  selector: 'page-books',
  templateUrl: 'books.html'
})
export class BooksPage {

  constructor(private navCtrl: NavController) {}

  onLoadBook(name: string) {
    this.navCtrl.push(SingleBookPage, {bookName: name});
  }
}