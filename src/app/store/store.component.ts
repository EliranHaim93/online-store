import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../shared/product-interface';
import { ProductsService } from '../shared/products.service';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit, OnDestroy {
  private isPriceChecked: boolean = false;
  private isRatingChecked: boolean = false;
  private priceCheckboxId: number | null = null;
  private ratingCheckboxId: number | null = null;

  products: Product[] = [];
  products2: Product[] = [];

  // filtered arrays
  tempProducts: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(
    private productsList: ProductsService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts();

    this.storeService.price.subscribe((priceData: any) => {
      console.log(priceData);
      this.isPriceChecked = priceData[1];
      this.priceCheckboxId = priceData[0].id;
    });

    this.storeService.rating.subscribe((ratingData: any) => {
      console.log(ratingData);
      this.isRatingChecked = ratingData[1];
    });
  }

  ngOnDestroy(): void {
    this.storeService.price.unsubscribe();
    this.storeService.rating.unsubscribe();
  }

  getProducts() {
    this.products = this.productsList.productService();
  }

  filterProductsByPrice(
    isChecked = this.isPriceChecked,
    checkboxId = this.priceCheckboxId
  ) {
    if (isChecked && checkboxId === 1) {
      this.tempProducts = this.products2.filter(
        (el: Product) => el.price <= 100
      );
    }
    if (isChecked && checkboxId === 2) {
      this.tempProducts = this.products2.filter(
        (el: Product) => el.price >= 200
      );
    }
  }

  //   filterProductsByRaring() {
  //     if (this.isRatingChecked) {
  //       if ((this.ratingCheckboxId = 1)) {
  //         this.tempProducts = this.products2.filter((el: Product) => {
  //           return el.rating === 1;
  //         });
  //       }
  //       if ((this.ratingCheckboxId = 3)) {
  //         this.tempProducts = this.products2.filter((el: Product) => {
  //           return el.rating >= 3;
  //         });
  //       }
  //       if ((this.ratingCheckboxId = 5)) {
  //         this.tempProducts = this.products2.filter((el: Product) => {
  //           return el.rating === 5;
  //         });
  //       }
  //     }
  //   }
}
