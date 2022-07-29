import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { TotalExpensesComponent } from './components/total-expenses/total-expenses.component';

const routes: Routes = [
  { path: "list", component: ExpensesListComponent },
  // :id is a variable in the URL which can have different values
  { path: "form", component: ExpenseFormComponent },
  // without pathMatch: full, this would match anything starting with details/
  { path: "details", pathMatch: "full", redirectTo: "/" },
  { path: "total", component: TotalExpensesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
