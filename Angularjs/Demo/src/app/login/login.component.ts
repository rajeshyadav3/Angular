import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

//Import Router class
import { Router } from '@angular/router';

//Import EmpService
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  
  emp: any;

  constructor(private router: Router,private toastr:ToastrService,private service: EmpService) {

  }

  ngOnInit(){
  }

  

 async loginSubmit(loginForm: any) {
    console.log(loginForm);
    console.log("EmailId : " + loginForm.emailId);
    console.log("Password: " + loginForm.password);

    if (loginForm.emailId == 'HR' && loginForm.password == 'HR') {
      
      //Setting the isUserLoggedIn variable value to true under EmpService
      this.service.setIsUserLoggedIn();

      //Storing EmailId under LocalStorage
      localStorage.setItem("emailId", loginForm.emailId);
      this.toastr.success("Login sucess");
      this.router.navigate(['showemps']);
    } else {

      this.emp = null;

      await this.service.employeeLogin(loginForm.emailId, loginForm.password).then((data: any) => {
        console.log(data);
        this.emp = data;
      });

      if (this.emp != null) {

        //Setting the isUserLoggedIn variable value to true under EmpService
        this.service.setIsUserLoggedIn();
        
        //Storing EmailId under LocalStorage
        localStorage.setItem("emailId", loginForm.emailId);
        this.toastr.success("Login sucess");
        this.router.navigate(['products']);
      } else {
       this.toastr.error("Invalid Credentials")
      }

    }

  }

}