import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesCountComponent } from './components/employees-list/employees-count/employees-count.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeesCountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
