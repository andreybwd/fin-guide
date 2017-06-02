import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Wallet } from '../../providers/wallet/wallet.interface';
import { CURRENCIES } from '../select-currency/currencies';
import SETTINGS from '../../app/app-settings';
import * as WALLET_TYPES from '../../providers/wallet/wallet-types';

/**
 * Generated class for the WalletComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'wallet',
  templateUrl: 'wallet.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletComponent {
  @Input()
  public wallet: Wallet;

  @Output()
  public onAddFunds: EventEmitter<Wallet> = new EventEmitter;

  @Output()
  public onEdit: EventEmitter<Wallet> = new EventEmitter;

  @Output()
  public onDelete: EventEmitter<Wallet> = new EventEmitter;

  public currencies: any = CURRENCIES;

  public iconsPath = SETTINGS.ICONS.PATH;

  public walletTypes: any = WALLET_TYPES;
}
