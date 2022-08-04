import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductsService } from '../shared/products.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private productService: ProductsService) {}
}
