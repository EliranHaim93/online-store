import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  cartItem = new Subject();

  constructor() {}
}
