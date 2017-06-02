import { Action } from '@ngrx/store';
import { WALLET } from '../action-types';
import { Wallet } from '../../providers/wallet/wallet.interface';
import { Transaction } from '../../providers/transaction/transaction.interface';

const initialState: { [id: string]: Wallet } = {};

export function walletsReducer(state: any = initialState, action: Action) {
  const { payload } = action;

  switch (action.type) {
    case WALLET.SET:
      let newState = {};
      payload.map((wallet) => newState[wallet.id] = wallet);
      return newState;

    case WALLET.ADD:
      return Object.assign({}, state, { [payload.id]: payload });

    case WALLET.TRANSACTION:
      const transaction: Transaction = payload;
      let walletTo: Wallet = Object.assign({}, state[transaction.widTo]);
      walletTo.sum += +transaction.sum;
      return Object.assign({}, state, { [walletTo.id]: walletTo });

    default:
      return state;
  }
}
