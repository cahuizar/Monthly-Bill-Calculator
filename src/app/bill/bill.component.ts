import { Component, OnInit } from '@angular/core';
import { Bill } from './bill.model';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  bills: Bill;

  constructor() { 
    this.bills = new Bill("water", "10.68");
  }

  ngOnInit() {
  }

}
