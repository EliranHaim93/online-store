import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product-interface';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productsService.productsList;
  }
}
