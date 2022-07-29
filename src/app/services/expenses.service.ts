import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Expense } from '../interfaces/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private _expense = new BehaviorSubject<Expense[]>([{
    amount: 0,
    description: "",
    category: "Bills"
  }])
  readonly expense = this._expense.asObservable();

  private _totalExpenses = new BehaviorSubject<number>(0);
  readonly totalExpenses = this._totalExpenses.asObservable();

  constructor() { }

  addExpense(newExpense: Expense) {
    this.getExpenses().push(newExpense);
    this.setTotalExpenses(newExpense.amount);
  }

  getExpenses(): Expense[] {
    return this._expense.getValue();
  }

  setTotalExpenses(newTotalExpense: number) {
    this._totalExpenses.next(this.getTotalExpenses() + newTotalExpense);
  }

  getTotalExpenses(): number | 0 {
    return this._totalExpenses.getValue();
  }
}
