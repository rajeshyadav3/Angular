import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  cartItems: any;

  constructor(private service: EmpService) {
    this.cartItems = service.getCartItems();
  }

  ngOnInit() {
    
  }

}