import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductsService } from '../shared/products.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  price = new Subject();
  rating = new Subject();

  constructor(private productService: ProductsService) {}
}
