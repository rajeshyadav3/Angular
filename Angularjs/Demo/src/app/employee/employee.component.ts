import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any;
  emailId: any;

  constructor(private service: EmpService) {

      //Getting emailId from LocalStorage
    this.emailId = localStorage.getItem('emailId');

  }

  ngOnInit() {
   
    this.service.getEmployees().subscribe((data: any) => {
      console.log(data);
      this.employees = data;
    });
  }
}