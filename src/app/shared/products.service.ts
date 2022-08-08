import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './product-interface';

export interface PriceFilter {
  id: number;
  type: string;
  priceLabel: string;
  price: number;
}
export interface ratingFilter {
  id: number;
  type: string;
  stars: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  ratingSubject$ = new Subject<ratingFilter[] | number>();
  priceSubject$ = new Subject<PriceFilter[]>();
  price: PriceFilter[] = [];
  rating: ratingFilter[] | number = [];

  productsList: Product[] = [
    {
      id: 1,
      companyName: 'Apple',
      productName: 'Iphone X Max Pro',
      price: 999,
      stars: 5,
    },
    {
      id: 2,
      companyName: 'Apple',
      productName: 'Airpods Ultra',
      price: 350,
      stars: 3,
    },
    {
      id: 3,
      companyName: 'Apple',
      productName: 'Charger',
      price: 50,
      stars: 4,
    },
    {
      id: 4,
      companyName: 'JBL',
      productName: 'JBL GO BT Speaker',
      price: 80,
      stars: 2,
    },
    {
      id: 5,
      companyName: 'JBL',
      productName: 'JBL 5.1 SoundBar',
      price: 500,
      stars: 5,
    },
    {
      id: 6,
      companyName: 'Oneplus',
      productName: 'Type C Charger',
      price: 90,
      stars: 1,
    },
    {
      id: 7,
      companyName: 'Xiaomi',
      productName: 'Mi 6 Roborock',
      price: 150,
      stars: 3,
    },
  ];

  priceFilters: PriceFilter[] = [
    {
      id: 1,
      type: 'checkbox',
      priceLabel: '< 100$',
      price: 100,
    },
    {
      id: 2,
      type: 'checkbox',
      priceLabel: '> 200$',
      price: 200,
    },
  ];

  ratingFilters: ratingFilter[] = [
    {
      id: 1,
      type: 'radio',
      stars: 1,
    },
    {
      id: 2,
      type: 'radio',
      stars: 3,
    },
    {
      id: 3,
      type: 'radio',
      stars: 5,
    },
  ];

  constructor() {}

  get ratingFilters$() {
    return this.ratingSubject$.asObservable();
  }

  get priceFilters$() {
    return this.priceSubject$.asObservable();
  }

  setPriceFilter(filter: PriceFilter) {
    // if element already chosen in price filters
    const foundFilter = this.price.find((p) => p.id === filter.id);

    if (foundFilter) {
      // if it is in price filters then find its index and remove it
      const indexOf = this.price.indexOf(foundFilter);
      this.price.splice(indexOf, 1);
    } else {
      // else, add it to price filters
      this.price.push(filter);
    }

    // push to subscriber (store)
    this.priceSubject$.next(this.price.slice());
  }

  setRatingFilter(filter: ratingFilter) {
    this.rating = filter.stars;
    this.ratingSubject$.next(this.rating);
  }
}
