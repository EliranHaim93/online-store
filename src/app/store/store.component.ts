import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product-interface';
import { ProductsService } from '../shared/products.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  products: Product[] = [];
  fileteredProducts: Product[] = [];

  selectToCart = new FormGroup({
    quantity: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  constructor(
    private productsService: ProductsService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts();

    this.fileteredProducts.push(...this.products);

    this.productsService.priceFilters$.subscribe((filters) => {
      const filter = filters.map((filter) => filter.id);
      let filteredByPrice: Product[] = [];

      if (filter.includes(1)) {
        filteredByPrice.push(
          ...this.products.filter((product) => product.price <= 100)
        );
      }
      if (filter.includes(2)) {
        filteredByPrice.push(
          ...this.products.filter((product) => product.price >= 200)
        );
      }

      if (filteredByPrice.length) {
        this.fileteredProducts = [];
        this.fileteredProducts.push(...filteredByPrice);
      }
    });

    this.productsService.ratingFilters$.subscribe((filters) => {
      const [stars] = [filters];
      const filteredByRating: Product[] = this.products.filter(
        (product) => product.stars <= stars
      );
      this.fileteredProducts = [];
      this.fileteredProducts.push(...filteredByRating);
    });
  }

  getProducts() {
    this.products = this.productsService.productsList;
  }

  onClick(companyName: string, productName: string) {
    const cartItem = {
      quantity: this.selectToCart.get('quantity')?.value,
      companyName: companyName,
      productName: productName,
    };
    this.storeService.cartItem.next(cartItem);
  }
}
