import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: any;
  cartProducts: any;

  constructor(private service: EmpService) {

    this.cartProducts = [];
    this.products = [
      {id:1001, name:"Nokia",   price:14999.00, description:"No Cost EMI Applicable", imgsrc:"assets/images/10001.jpg"},
      {id:1002, name:"Samsung", price:24999.00, description:"No Cost EMI Applicable", imgsrc:"assets/images/10002.jpg"},
      {id:1003, name:"IPhone",  price:34999.00, description:"No Cost EMI Applicable", imgsrc:"assets/images/10003.jpg"},
      {id:1004, name:"RealMe",  price:44999.00, description:"No Cost EMI Applicable", imgsrc:"assets/images/10004.jpg"},
      {id:1005, name:"Oppo",    price:54999.00, description:"No Cost EMI Applicable", imgsrc:"assets/images/10005.jpg"},
      {id:1006, name:"Vivo",    price:64999.00, description:"No Cost EMI Applicable", imgsrc:"assets/images/10006.jpg"}
    ];
  }

  ngOnInit() {    
  }

  addToCart(product: any) {
    // this.cartProducts.push(product);
    // localStorage.setItem("cartItems", JSON.stringify(this.cartProducts));

    //Cart using Service
    this.service.addToCart(product);
  }
}