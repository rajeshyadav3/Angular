import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {
   protected aFormGroup!: FormGroup; // Declare aFormGroup as FormGroup
  emp: any;
  siteKey: string = '6Lc8iWgpAAAAAHcBjB7vGcmv_dl-YU8JJs0-BynY'; // Declare siteKey as a property

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private service: EmpService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // Initialize aFormGroup in ngOnInit
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  async loginSubmit(loginForm: any) {
    console.log(loginForm);
    console.log("EmailId : " + loginForm.emailId);
    console.log("Password: " + loginForm.password);

    if (loginForm.emailId == 'HR' && loginForm.password == 'HR') {
      // Setting the isUserLoggedIn variable value to true under EmpService
      this.service.setIsUserLoggedIn();

      // Storing EmailId under LocalStorage
      localStorage.setItem("emailId", loginForm.emailId);
      this.toastr.success("Login success");
      this.router.navigate(['showemps']);
    } else {
      this.emp = null;

      await this.service.employeeLogin(loginForm.emailId, loginForm.password).then((data: any) => {
        console.log(data);
        this.emp = data;
      });

      if (this.emp != null) {
        // Setting the isUserLoggedIn variable value to true under EmpService
        this.service.setIsUserLoggedIn();
        
        // Storing EmailId under LocalStorage
        localStorage.setItem("emailId", loginForm.emailId);
        this.toastr.success("Login success");
        this.router.navigate(['products']);
      } else {
        this.toastr.error("Invalid Credentials");
      }
    }
  }
}
