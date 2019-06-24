import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';
import { SingleBookPage } from './single-book/single-book';
import { Book } from './../../models/Book';

import { HardDbService } from './../../services/hard-db.service';

@Component({
  selector: 'page-books',
  templateUrl: 'books.html'
})
export class BooksPage {

  booksList : Book[];

  constructor(private modalCtrl : ModalController, private hardDbService: HardDbService, private menuCtrl: MenuController) {}

  ionViewWillEnter(){
   this.booksList = this.hardDbService.booksList.slice();
  }

  onLoadBook(index: number){
    let modal = this.modalCtrl.create(SingleBookPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}