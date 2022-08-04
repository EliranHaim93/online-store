import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product-interface';
import {
  PriceFilter,
  ProductsService,
  RatingFilter,
} from 'src/app/shared/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class sidebarComponent implements OnInit {
  priceFilter: PriceFilter[] = [];
  ratingFilter: RatingFilter[] = [];

  constructor(private produtService: ProductsService) {}

  ngOnInit(): void {
    this.getPriceFilters();
    this.getRatingFilters();
  }

  getPriceFilters() {
    this.priceFilter = this.produtService.priceFilters;
  }

  getRatingFilters() {
    this.ratingFilter = this.produtService.ratingFilters;
  }

  onPriceChange(price: PriceFilter, event: boolean) {
    if (event && price.id === 1) {
      // this.produtService.productsList = [
      //   ...this.produtService.productsList.filter((el) => {
      //     return el.price <= 100;
      //   }),
      // ];
    }
    console.log(price, event);
  }

  onRatingChange(rating: RatingFilter, event: boolean) {
    console.log(rating, event);
  }
}
