import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class sidebarComponent implements OnInit {
  @Output() priceChange = new EventEmitter();
  @Output() ratingChange = new EventEmitter();

  priceFilters: any = [
    {
      id: 1,
      type: 'checkbox',
      price: '< 100$',
    },
    {
      id: 2,
      type: 'checkbox',
      price: '> 200$',
    },
  ];

  ratingFilters: any = [
    {
      id: 1,
      type: 'checkbox',
      stars: 1,
    },
    {
      id: 2,
      type: 'checkbox',
      stars: 3,
    },
    {
      id: 3,
      type: 'checkbox',
      stars: 5,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onPriceChange(price: any, event: boolean) {
    const priceEvent = [price, event];
    // console.log('price click');
    this.priceChange.emit(priceEvent);
  }

  onRatingChange(rating: any, event: boolean) {
    const ratingEvent = [rating, event];
    // console.log('rating click');
    this.ratingChange.emit(ratingEvent);
  }
}
