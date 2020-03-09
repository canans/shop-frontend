import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Products } from '../common/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

product:Products[]=[];

  getProduct(){
    this.productService.getAll().subscribe(
      data=>{
        this.product=data;
     

      }
    );
  }
}
