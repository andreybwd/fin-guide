import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Wallet } from '../../providers/wallet/wallet.interface';
import { WalletProvider } from '../../providers/wallet/wallet';

/**
 * Generated class for the EditWalletPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-wallet',
  templateUrl: 'edit-wallet.html',
})
export class EditWalletPage {
  public wallet: Wallet = this.navParams.data.wallet;

  constructor(private navParams: NavParams,
              private walletProvider: WalletProvider,
              private viewController: ViewController) {
  }

  public dismiss() {
    this.viewController.dismiss();
  }

  public editWallet(wallet: Wallet) {
    this.walletProvider.save(wallet);
    this.viewController.dismiss();
  }

}
