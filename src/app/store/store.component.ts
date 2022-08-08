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
  fileteredProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();

    this.fileteredProducts.push(...this.products);

    this.productsService.priceFilters$.subscribe((filters) => {
      // this.products.filter((product) => product.price <= filters);
    });

    this.productsService.ratingFilters$.subscribe((filters) => {
      const [stars] = [filters];
      const filteredByRating: Product[] = this.products.filter(
        (product) => product.stars <= stars
      );
      this.fileteredProducts = [];
      this.fileteredProducts.push(...filteredByRating);

      console.log(this.fileteredProducts);
    });
  }
  //TODO: now filteredbytating returns a correct arr of products that need to be displayed
  //find a way do display it instead of "products" on change

  getProducts() {
    this.products = this.productsService.productsList;
  }
}
