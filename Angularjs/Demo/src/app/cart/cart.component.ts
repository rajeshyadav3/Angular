import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  
  localStorageData: any;
  emailId: any;

  //Cart using Service
  products: any;

  constructor(private service: EmpService,private router :Router) {
    this.emailId = localStorage.getItem('emailId');

    this.products = service.getCartItems();

    // this.localStorageData = localStorage.getItem('cartItems');
    // this.products = JSON.parse(this.localStorageData);
    // console.log(this.products);
  }

  ngOnInit() {
    
  }
  goToProducts(){
  this.router.navigate(['products']);
  }

  calculateTotal(): number {
    let total = 0;
    for (const product of this.products) {
      total += product.price;
    }
    return total;

  }

  deleteProduct(product: any) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1); // Remove the product from the array
    }
  }

}