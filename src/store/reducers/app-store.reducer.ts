import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { localStorageSync } from 'ngrx-store-localstorage';
import { walletsReducer } from './wallets.reducer';

const reducers = {
  wallets: walletsReducer
};

const reducer: ActionReducer<any> = compose(
  localStorageSync({ keys: Object.keys(reducers), rehydrate: true }),
  combineReducers)(reducers);

export function appStoreReducer(state: any, action: any) {
  return reducer(state, action);
}
