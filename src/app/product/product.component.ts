import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ListproductService } from '../listproduct.service';
import { Productinterface } from '../productinterface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
  export class ProductComponent implements OnInit {
    products: Productinterface[] = []; 

    constructor(private productService: ListproductService) { }
  
    ngOnInit() {
      this.products = this.productService.products;
    }
  }
 


