import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallet } from './wallet.interface';
import SETTINGS from '../../app/app-settings';
import { ApiProvider } from '../api/api';
import { Store } from '@ngrx/store';
import { WALLET } from '../../store/action-types';

/*
 Generated class for the WalletProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class WalletProvider {
  public wallets$: Observable<{ [id: string]: Wallet }>;

  public constructor(private apiProvider: ApiProvider,
                     private store: Store<any>) {
    this.wallets$ = this.store.select('wallets');
  }

  public init() {
    this.apiProvider.getCall(SETTINGS.API.WALLET).subscribe((wallets) => {
      this.store.dispatch({
        payload: wallets,
        type: WALLET.SET
      });
    });
  }

  public create(wallet: Wallet) {
    this.store.dispatch({
      payload: wallet,
      type: WALLET.ADD
    });

    this.apiProvider.postCall(SETTINGS.API.WALLET, wallet)
      .subscribe((res) => res);
  }
}
