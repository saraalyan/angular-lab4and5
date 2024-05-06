import { Component, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { CartserviceService } from '../cartservice.service';
import { Productinterface } from '../productinterface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductComponent,ProductCardComponent,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: Productinterface[] = [];
  total: number = 0;

  constructor(private cartservice1: CartserviceService) {
    this.loadCartItems();
    this.updateTotal();
  }

  loadCartItems() {
    this.cartItems = this.cartservice1.getItems();
  }

  deleteFromCart(item: Productinterface) {
    this.cartservice1.delete(item);
    this.loadCartItems();
    this.updateTotal();
  }

  incrementQuantity(item: Productinterface) {
    this.cartservice1.incrementQuantity(item.id);
    this.loadCartItems();
    this.updateTotal();
  }

  decrementQuantity(item: Productinterface) {
    this.cartservice1.decrementQuantity(item.id);
    this.loadCartItems();
    this.updateTotal();
  }

  updateTotal() {
    this.total = this.cartservice1.getTotal();
  }
}