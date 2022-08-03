import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  productService() {
    return [
      {
        id: 1,
        companyName: 'Apple',
        productName: 'Iphone X Max Pro',
        price: 999,
        rating: 5,
      },
      {
        id: 2,
        companyName: 'Apple',
        productName: 'Airpods Ultra',
        price: 350,
        rating: 3,
      },
      {
        id: 3,
        companyName: 'Apple',
        productName: 'Charger',
        price: 50,
        rating: 4,
      },
      {
        id: 4,
        companyName: 'JBL',
        productName: 'JBL GO BT Speaker',
        price: 80,
        rating: 2,
      },
      {
        id: 5,
        companyName: 'JBL',
        productName: 'JBL 5.1 SoundBar',
        price: 500,
        rating: 5,
      },
      {
        id: 6,
        companyName: 'Oneplus',
        productName: 'Type C Charger',
        price: 90,
        rating: 1,
      },
      {
        id: 7,
        companyName: 'Xiaomi',
        productName: 'Mi 6 Roborock',
        price: 150,
        rating: 3,
      },
    ];
  }
}
