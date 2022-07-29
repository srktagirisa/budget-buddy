import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/interfaces/expense';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {

  expenses: Expense[] = [];
  
  constructor(private expensesService:ExpensesService) { }

  ngOnInit(): void {
    this.expenses = this.expensesService.getExpenses();
  }

}
