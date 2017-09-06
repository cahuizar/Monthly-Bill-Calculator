import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewBillComponent } from './new-bill/new-bill.component';
import { BillComponent } from './bill/bill.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBillComponent,
    BillComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }