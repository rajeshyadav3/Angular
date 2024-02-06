import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

//For Modal Dialog Box
declare var jQuery: any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: any;
  employees: any;
  departments: any;
  emailId: any;
  countries: any;

  constructor(private service: EmpService) {

      //Getting emailId from LocalStorage
    this.emailId = localStorage.getItem('emailId');

    //For 2-Way DataBinding, under Modal Dialog Box
    this.employee = {empId:'',empName:'',salary:'',gender:'',doj:'',country:'',emailId:'',password:'',department:{deptId:''}};
  

  }


  ngOnInit() {
   
    this.service.getEmployees().subscribe((data: any) => {console.log(data);this.employees = data; });
    this.service.getAllCountries().subscribe((data: any) => {this.countries = data;});
    this.service.getAllDepartments().subscribe((data: any) => {this.departments = data;});
  }

  editEmployee(emp: any) {
    this.employee = emp;
    console.log(this.employee);
    jQuery('#empModal').modal('show');
  }

  
  updateEmployee() {
    console.log(this.employee);
    this.service.updateEmployee(this.employee).subscribe((data: any) => {console.log(data);});
  }

  deleteEmployee(empId: any) {

    this.service.deleteEmployee(empId).subscribe((data: any) => {
      console.log(data);
    });

    const i = this.employees.findIndex((element: any) => {
      return element.empId == empId;
    });
    this.employees.splice(i, 1);

    alert("Employee Deleted Successfully");
  }
}