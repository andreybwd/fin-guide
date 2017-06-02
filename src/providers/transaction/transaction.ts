import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Transaction } from './transaction.interface';
import SETTINGS from '../../app/app-settings';
import { Store } from '@ngrx/store';
import { WALLET } from '../../store/action-types';

/*
 Generated class for the TransactionProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class TransactionProvider {

  public constructor(private apiProvider: ApiProvider,
                     private store: Store<any>) {
  }

  public create(transaction: Transaction) {
    this.store.dispatch({
      payload: transaction,
      type: WALLET.TRANSACTION
    });

    this.apiProvider.postCall(SETTINGS.API.TRANSACTION, transaction)
      .subscribe((res) => res);
  }
}
