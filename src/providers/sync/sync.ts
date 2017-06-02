import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BudgetProvider } from '../budget/budget';
import { WalletProvider } from '../wallet/wallet';

/*
 Generated class for the SyncProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class SyncProvider {

  public constructor(private budgetProvider: BudgetProvider,
                     private walletProvider: WalletProvider) {
  }

  public init(): Observable<any> {
    const budgets = this.budgetProvider.getList();

    this.walletProvider.init();

    return budgets;
  }

}
