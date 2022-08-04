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

  constructor(private produtService: ProductsService) {}

  ngOnInit(): void {
    this.getPriceFilters();
    this.getRatingFilters();
  }

  onPriceChange(price: any, event: boolean) {}

  onRatingChange(rating: any, event: boolean) {}

  getPriceFilters() {
    this.priceFilter = this.produtService.priceFilters;
  }

  getRatingFilters() {
    this.ratingFilter = this.produtService.ratingFilters;
  }
}
