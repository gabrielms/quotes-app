import { SettingsService } from './../../services/settings';
import { QuotePage } from './../quote/quote';
import { QuotesService } from './../../services/quotes';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(
    private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private settingsService: SettingsService){
  }

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
    console.log(this.settingsService.isAlternativeBackground());
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);

    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove){
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    this.quotes = this.quotesService.getFavoriteQuotes();
  }
}
