import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{

id: number;
name: String;
avg: number;

address: any;
hobbies: any;

constructor(){
  //alert("constructor invoked...");

  this.id=101;
  this.name='rajesh';
  this.avg=45.65;

  this.address = {
    streetno: 101,
    city:'Hyderabad',
    state:'Telangan'
  };

  this.hobbies = ['sleeping','Eating','palying']; 

  
}

ngOnInit() {
  //alert("ngOnInit invoked...");

  }

}
