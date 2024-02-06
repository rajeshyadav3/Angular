import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  isUserLoggedIn: boolean;

  //Cart using Service
  cartItems: any;

  //Dependency Injection for HttpClient
  constructor(private http: HttpClient) { 
    this.isUserLoggedIn = false;
    //Cart using Service
    this.cartItems = [];
  }

  getAllCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getEmployees(): any {
    return this.http.get('http://localhost:8080/getEmployees');
  }

  getEmployeeById(empId: any): any {
    return this.http.get('http://localhost:8080/getEmployeeById/' + empId);
  }

  getAllDepartments(): any {
    return this.http.get('http://localhost:8080/getDepartments');
  }

  regsiterEmployee(employee: any): any {
    return this.http.post('http://localhost:8080/addEmployee', employee);
  }

  employeeLogin(emailId: any, password: any): any {
    return this.http.get('http://localhost:8080/empLogin/' + emailId + '/' + password).toPromise();
  }

  deleteEmployee(empId: any): any {
    return this.http.delete('http://localhost:8080/deleteEmployeeById/' + empId);
  }

  updateEmployee(emp: any): any {
    return this.http.put('http://localhost:8080/updateEmployee', emp);
  }

  //Cart using Service
  addToCart(product: any) {
    this.cartItems.push(product);
  }
  //Cart using Service
  getCartItems(): any {
    return this.cartItems;
  }

  //Login
  setIsUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getIsUserLogged(): boolean {
    return this.isUserLoggedIn;
  }

  //Logout
  setIsUserLoggedOut() {
    this.isUserLoggedIn = false;
  }

}