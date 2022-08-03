import { Component } from '@angular/core';
import { StoreService } from './store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'online-Store';

  constructor(private storeService: StoreService) {}

  onPriceChanged(priceEvent: any) {
    console.log('I was clicked - price');
    this.storeService.price.next(priceEvent);
  }

  onRatingChanged(ratingEvent: any) {
    console.log('I was clicked - rating');
    this.storeService.rating.next(ratingEvent);
  }
}
