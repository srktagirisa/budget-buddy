import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { TotalExpensesComponent } from './components/total-expenses/total-expenses.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ExpensesListComponent,
    ExpenseFormComponent,
    TotalExpensesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
