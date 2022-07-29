import { Component, OnInit } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-total-expenses',
  templateUrl: './total-expenses.component.html',
  styleUrls: ['./total-expenses.component.css']
})
export class TotalExpensesComponent implements OnInit {

  totalExpenses: number = 0;
  totalBudget: number = 1000;

  constructor(private expensesService:ExpensesService) { }

  ngOnInit(): void {
    this.expensesService.totalExpenses.subscribe(newTotalExpenses => this.totalExpenses = newTotalExpenses);
  }

}
