import { Component, OnInit } from '@angular/core';
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

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getPriceFilters();
    this.getRatingFilters();
  }

  getPriceFilters() {
    this.priceFilter = this.productService.priceFilters;
  }

  getRatingFilters() {
    this.ratingFilter = this.productService.ratingFilters;
  }

  onPriceChange(price: PriceFilter) {
    this.productService.setPriceFilter(price);
  }

  onRatingChange(rating: RatingFilter) {
    this.productService.setRatingFilter(rating);
  }
}
