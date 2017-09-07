import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BillComponent } from './bill/bill.component';
import { SummarygitComponent } from './summarygit/summarygit.component';

@NgModule({
  declarations: [
    AppComponent,
    BillComponent,
    SummarygitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
