import { Component } from '@angular/core';
import { Bill } from './bill/bill.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bills: Bill[];
  totalPrice: number;
  priceError: string;
  isValidVisible: boolean;
  isInvalidVisible: boolean;


  constructor() {
    this.bills = [];
    this.totalPrice = 0;
    this.priceError = "";
    this.isValidVisible = true;
    this.isInvalidVisible = false;

  }

  createBill(billName: HTMLInputElement, billPrice: HTMLInputElement): boolean {
    if(this.isNum(billPrice.value)) {
      this.bills.push(new Bill(billName.value, billPrice.value));
      this.totalPrice += + billPrice.value;
      billName.value = "";
      billPrice.value = "";
      this.priceError = "";
      this.isInvalidVisible = false;
      this.isValidVisible = true;
    } else {
      this.priceError = "Yo, make sure you are using a number...";
      this.isInvalidVisible = true;
      this.isValidVisible = false;
    }
    
    return false;
  }

  isNum(price: string): boolean {
    const pattern = /[+-]?([0-9]*[.])?[0-9]+/;
    if(!pattern.test(price)) {
      return false;
    }
    return true;
  }

}
