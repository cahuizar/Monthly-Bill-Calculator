import { Component } from '@angular/core';
import { Bill } from './bill/bill.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bills: Bill[];
  totalPrice: string;
  constructor() {
    this.bills = [];
    this.totalPrice = "";
  }

  createBill(billName: HTMLInputElement, billPrice: HTMLInputElement): boolean {
    this.bills.push(new Bill(billName.value, billPrice.value));
    this.totalPrice += billPrice;
    billName.value = "";
    billPrice.value = "";
    return false;
  }

}
