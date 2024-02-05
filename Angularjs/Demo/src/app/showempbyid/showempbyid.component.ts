import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-showempbyid',
  templateUrl: './showempbyid.component.html',
  styleUrls: ['./showempbyid.component.css']
})
export class ShowempbyidComponent implements OnInit {

  empId: any;
  emp: any;

  constructor(private service: EmpService) { }
  
  ngOnInit() { }

  getEmployee() {
    this.service.getEmployeeById(this.empId).subscribe((data: any) => {
      this.emp = data;
    });
  }
}
