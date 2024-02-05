import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  
  countries: any;
  departments: any;
  emp:any;

  constructor(private service: EmpService,private toastr: ToastrService,private router: Router) {

    this.emp = {
      empName:'',
      salary:'',
      gender:'',
      doj:'',
      country:'',
      emailId:'',
      mobileNo:'',
      password:'',
      department: {
        deptId:''
      }
    };
  }

  ngOnInit() {
    this.service.getAllCountries().subscribe((data: any) => {
      this.countries = data;
      console.log(data);
    });
    this.service.getAllDepartments().subscribe((data: any) => {this.departments = data;});
  }
 

  registerSubmit(regForm: any) {
    console.log(regForm);

    this.emp.empName = regForm.value.empName;
    this.emp.salary = regForm.value.salary;
    this.emp.gender = regForm.value.gender;
    this.emp.doj = regForm.value.doj;
    this.emp.country = regForm.value.country;
    this.emp.emailId = regForm.value.emailId;
    this.emp.mobileNo = regForm.value.mobileNo;
    this.emp.password = regForm.value.password;
    this.emp.department.deptId = regForm.value.department;

    console.log(this.emp);

    this.service.regsiterEmployee(this.emp).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['login']);
        this.toastr.success('Registration Successful!', 'Success');
    });
}


}
