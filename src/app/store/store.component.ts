import { Component, OnInit } from '@angular/core';

interface Product {
  companyName: string;
  productName: string;
  price: number;
}

//TODO: fillter example

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  product: Product = {
    companyName: 'Apple',
    productName: 'Apple Product',
    price: 200,
  };

  filter = { company: true, product: true, price: true };
  products: Product[] = [];
  filteredProducts: Product[] = [];

  filterChange() {
    // this.filteredProducts = this.products.filter(
    //   (x) =>
    //     (x.category === 'kids' && this.filter.company) ||
    //     (x.category === 'mens' && this.filter.product) ||
    //     (x.category === 'womens' && this.filter.price)
    // );
  }

  constructor() {}

  ngOnInit(): void {}
}
