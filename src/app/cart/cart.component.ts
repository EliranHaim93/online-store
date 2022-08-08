import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store/store.service';

interface CartItem {
  quantity: number;
  companyName: string;
  productName: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItem: CartItem[] = [];

  constructor(private storeServie: StoreService) {}

  ngOnInit(): void {
    this.storeServie.cartItem.subscribe((res) => console.log(res));
  }
}
