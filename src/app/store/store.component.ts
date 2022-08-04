import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../shared/product-interface';
import { ProductsService } from '../shared/products.service';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productsList: ProductsService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productsList.productService;
  }
}
