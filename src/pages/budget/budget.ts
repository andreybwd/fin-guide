import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController } from 'ionic-angular';
import * as WALLET_TYPES from '../../providers/wallet/wallet-types';
import { AddWalletPage } from '../add-wallet/add-wallet';
import { WalletProvider } from '../../providers/wallet/wallet';
import { Wallet } from '../../providers/wallet/wallet.interface';
import { AddFundsPage } from '../add-funds/add-funds';

/**
 * Generated class for the BudgetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html',
})
export class BudgetPage {
  public wallets: { [id: string]: Wallet };

  public WALLET_TYPES = WALLET_TYPES;

  public activeWalletType = WALLET_TYPES.HOUSEHOLD;

  public budgetId: string = this.navParams.data.budgetId;

  public constructor(private navParams: NavParams,
                     private modalCtrl: ModalController,
                     private walletProvider: WalletProvider) {
    this.walletProvider.wallets$
      .subscribe((wallets) => this.wallets = wallets);
  }

  public addWalletModal(type: string) {
    const addWalletModal = this.modalCtrl.create(AddWalletPage, { type });
    addWalletModal.present();
  }

  public addFundsModal(wallet: Wallet) {
    const addFundsModal = this.modalCtrl.create(AddFundsPage, {
      wallet,
      budgetId: this.budgetId
    });
    addFundsModal.present();
  }

}
