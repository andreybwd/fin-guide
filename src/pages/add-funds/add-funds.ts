import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Wallet } from '../../providers/wallet/wallet.interface';
import { Transaction } from '../../providers/transaction/transaction.interface';
import { TransactionProvider } from '../../providers/transaction/transaction';
import { HelperProvider } from '../../providers/helper/helper';

/**
 * Generated class for the AddFundsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-funds',
  templateUrl: 'add-funds.html',
})
export class AddFundsPage {
  public wallet: Wallet = this.navParams.data.wallet;

  public transaction: Transaction = {
    id: this.helperProvider.generateUniqueId(),
    budgetId: this.navParams.data.budgetId,
    widTo: this.wallet.id,
    type: 'DEPOSIT',
    status: 'ACTIVE',
    sum: null,
    description: '',
    createdAt: new Date(),
  };

  public constructor(private navParams: NavParams,
                     private transactionProvider: TransactionProvider,
                     private helperProvider: HelperProvider,
                     private viewController: ViewController) {
  }

  public dismiss() {
    this.viewController.dismiss();
  }

  public addFunds(transaction: Transaction) {
    this.transactionProvider.create(transaction);
    this.viewController.dismiss();
  }
}
