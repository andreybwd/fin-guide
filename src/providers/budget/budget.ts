import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Budget } from './budget.interface';
import SETTINGS from '../../app/app-settings';
import { ApiProvider } from '../api/api';

/*
 Generated class for the BudgetProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class BudgetProvider {

  public constructor(private apiProvider: ApiProvider) {
  }

  public getList(): Observable<Budget[]> {
    return this.apiProvider.getCall(SETTINGS.API.BUDGET);
  }

  public create(budget: Budget): Observable<Budget> {
    this.apiProvider.postCall(SETTINGS.API.BUDGET, budget)
      .subscribe((res) => res);

    return Observable.of(budget);
  }

}
