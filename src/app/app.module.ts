import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BooksPage } from './../pages/books/books';
import { SingleBookPage } from './../pages/books/single-book/single-book';
import { SingleCdPage } from './../pages/cds/single-cd/single-cd';
import { CdsPage } from './../pages/cds/cds';
import { SettingsPage } from './../pages/settings/settings';
import { TabsPage } from './../pages/tabs/tabs';

import { HardDbService } from './../services/hard-db.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BooksPage,
    SingleBookPage,
    CdsPage,
    SingleCdPage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BooksPage,
    SingleBookPage,
    CdsPage,
    SingleCdPage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HardDbService
  ]
})
export class AppModule {}
