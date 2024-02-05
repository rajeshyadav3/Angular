import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

//Import EmpService
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  //Dependency Injection for EmpService and Router
  constructor(private router: Router, private service: EmpService,private toastr:ToastrService) {

    localStorage.removeItem('emailId');
    localStorage.clear();

    //Setting the isUserLoggedIn variable value to false under EmpService
    this.service.setIsUserLoggedOut();

    
    this.toastr.success("Logout sucessfull");
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
