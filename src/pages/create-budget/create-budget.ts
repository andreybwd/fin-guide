import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BudgetProvider } from '../../providers/budget/budget';
import { Budget } from '../../providers/budget/budget.interface';
import { HelperProvider } from '../../providers/helper/helper';
import * as BUDGET_TYPES from '../../providers/budget/budget-types';
import { BudgetPage } from '../budget/budget';

/**
 * Generated class for the CreateBudgetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-budget',
  templateUrl: 'create-budget.html',
})
export class CreateBudgetPage {
  public budget: Budget = {
    id: this.helperProvider.generateUniqueId(),
    startDate: null,
    endDate: null,
    status: BUDGET_TYPES.PLANNING,
    sumPlan: null,
    createdAt: new Date()
  };

  public constructor(private navCtrl: NavController,
                     private helperProvider: HelperProvider,
                     private budgetProvider: BudgetProvider) {
    this.setDates();
  }

  public createBudget(budget: Budget) {
    this.budgetProvider.create(budget)
      .subscribe(({ id }) => {
        this.navCtrl.setRoot(BudgetPage, { id });
      })
  }

  private setDates() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const timezoneOffset = date.getTimezoneOffset();
    this.budget.startDate = new Date(year, month, day, 0, -timezoneOffset).toISOString();
    this.budget.endDate = new Date(year, month, day + 7, 0, -timezoneOffset).toISOString();
  }
}
