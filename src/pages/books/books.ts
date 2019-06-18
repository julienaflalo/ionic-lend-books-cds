import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SingleBookPage } from './single-book/single-book';
import { Book } from './../../models/Book';

import { HardDbService } from './../../services/hard-db.service';

@Component({
  selector: 'page-books',
  templateUrl: 'books.html'
})
export class BooksPage {

  booksList : Book[];

  constructor(private modalCtrl : ModalController, private hardDbService: HardDbService) {}

  ionViewWillEnter(){
   this.booksList = this.hardDbService.booksList.slice();
  }

  onLoadBook(index: number){
    let modal = this.modalCtrl.create(SingleBookPage, {index: index});
    modal.present();
  }

  // onLoadBook(book: {name: string, author: string, image: string, description: string}) {
  //   this.navCtrl.push(SingleBookPage, {book: book});
  // }

}