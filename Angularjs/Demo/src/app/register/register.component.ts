import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  
  empName: any;
  salary: any;
  gender: any;
  doj: any;
  country: any;
  emailId: any;
  password: any;
  
  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    console.log("EmpName: " + this.empName);
    console.log("Salary: " + this.salary);
    console.log("Gender: " + this.gender);
    console.log("DateOfJoin: " + this.doj);
    console.log("Country: " + this.country);
    console.log("Email-Id: " + this.emailId);
    console.log("Password: " + this.password);
  }

}