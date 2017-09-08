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
  nameError: string;
  priceError: string;
  isNameInvalidVisible: boolean;
  isNameValidVisible: boolean;
  isValidVisible: boolean;
  isInvalidVisible: boolean;


  constructor() {
    this.bills = [];
    this.totalPrice = 0;
    this.priceError = "";
    this.nameError = "";
    this.isNameValidVisible = true;
    this.isNameInvalidVisible = false;
    this.isValidVisible = true;
    this.isInvalidVisible = false;
  }

  createBill(billName: HTMLInputElement, billPrice: HTMLInputElement): boolean {
    if(this.isFormValid(billName, billPrice)) { 
      this.bills.push(new Bill(billName.value, billPrice.value));
      this.totalPrice += + billPrice.value;
      billName.value = "";
      billPrice.value = "";
      this.priceError = "";
    }
    return false;
  }

  isFormValid(billName: HTMLInputElement, billPrice: HTMLInputElement): boolean {
    var hasError: boolean = false;
    if(billName.value == "") {
      hasError = true;
      this.nameError = "Name cannot be empty."
      this.isNameInvalidVisible = true;
      this.isNameValidVisible = false;
    } else {
      this.nameError = "";
      this.isNameInvalidVisible = false;
      this.isNameValidVisible = true;
    }

    if(!this.isNum(billPrice.value)) {
      hasError = true;
      this.priceError = "Make sure you are using a number.";
      this.isInvalidVisible = true;
      this.isValidVisible = false;
    } else {
      this.priceError = "";
      this.isInvalidVisible = false;
      this.isValidVisible = true;
    }

    if(hasError) {
      return false;
    }
    return true;
  }

  isNum(price: string): boolean {
    const pattern = /[+-]?([0-9]*[.])?[0-9]+/;
    if(!pattern.test(price)) {
      return false;
    }
    return true;
  }

}
