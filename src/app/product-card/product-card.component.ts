import { Component, Input, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CommonModule, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ProductComponent,CommonModule,NgClass,StarRatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {
  cartservice1=inject(CartserviceService)

  addToCart(product: any) {
    this.cartservice1.addToCart(product);
    }
  constructor(private router:Router){}
  @Input() product:any;

  handelnavigatetodetails(id:string){
    this.router.navigate(['product-details',id])
  }

}
