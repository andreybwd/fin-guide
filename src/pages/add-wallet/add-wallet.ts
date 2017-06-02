import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Wallet } from '../../providers/wallet/wallet.interface';
import { HelperProvider } from '../../providers/helper/helper';
import { WalletProvider } from '../../providers/wallet/wallet';
import SETTINGS from '../../app/app-settings';
import * as WALLET_STATUSES from '../../providers/wallet/wallet-statuses';

/**
 * Generated class for the AddWalletPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-wallet',
  templateUrl: 'add-wallet.html',
})
export class AddWalletPage {
  public wallet: Wallet = {
    id: this.helperProvider.generateUniqueId(),
    name: '',
    currency: SETTINGS.CURRENCIES.DEFAULT,
    sum: 0,
    type: this.navParams.data.type,
    status: WALLET_STATUSES.ACTIVE,
    createdAt: new Date(),
    icon: SETTINGS.ICONS.DEFAULT
  };

  public constructor(private navParams: NavParams,
                     private helperProvider: HelperProvider,
                     private walletProvider: WalletProvider,
                     private viewController: ViewController) {
  }

  public dismiss() {
    this.viewController.dismiss();
  }

  public addWallet(wallet: Wallet) {
    this.walletProvider.create(wallet);
    this.viewController.dismiss();
  }
}
