import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.css'
})
export class Test2Component implements OnInit {

  person: any;

  constructor() {
    this.person = {
      id: 101,
      name: 'Harsha',
      avg: 45.45,
      address:{streetNo:101, city:'Hyd', state:'Telangana'},
      hobbies:['Movies', 'Music', 'Swimming'] 
    };
  }

  ngOnInit(){
  }

  buttonSubmit(){
    alert("button clicked...");
    //console.log(this.person);
  }

}