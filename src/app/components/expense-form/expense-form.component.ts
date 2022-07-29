import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/interfaces/expense';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {

  values: Expense =  {
    amount: 0,
    description: "",
    category: "Bills"
  };

  showSavedMessage = false;

  constructor(private expensesService: ExpensesService) { }

  ngOnInit(): void {
        
  }

  submitForm(): void {
    this.expensesService.addExpense({ ...this.values });
    this.showSavedMessage = true;
  }

}
