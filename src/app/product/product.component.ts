import { Component, OnInit, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ListproductService } from '../listproduct.service';
import { Productinterface } from '../productinterface';
import { CommonModule } from '@angular/common';
import { CartserviceService } from '../cartservice.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: Productinterface[] = [];

  constructor(private listproductService: ListproductService) {}
  cartservice1=inject(CartserviceService)
  ngOnInit(): void {
    this.listproductService.getProducts().subscribe(response => {
      this.products = response.products;
      console.log(  this.products)
    });
  }
}