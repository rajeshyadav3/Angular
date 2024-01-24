import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  emailId : string;
  password: string;

  constructor(){
    this.emailId = "rajesh@gmail.com";
    this.password = "1234567";
  }

  ngOnInit() {
    
  }

  buttonSubmit(){
    console.log(this.emailId);
    console.log(this.password);
  }

}