import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Book } from './../../../models/Book';
import { HardDbService } from './../../../services/hard-db.service';

@Component({
  selector: 'page-single-book',
  templateUrl: 'single-book.html',
})
export class SingleBookPage implements OnInit {

  index: number;
  book: Book;

  constructor(public navParams: NavParams, public viewCtrl: ViewController, public hardDbService: HardDbService) {
  }

  ngOnInit() {
    this.index = this.navParams.get("index");
    this.book = this.hardDbService.booksList[this.index];
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleBook() {
    this.book.isAvailable = !this.book.isAvailable;
  }


}
