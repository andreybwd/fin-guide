import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { CURRENCIES } from './currencies';

/**
 * Generated class for the SelectCurrencyComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'select-currency',
  templateUrl: 'select-currency.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectCurrencyComponent {
  @Input()
  public selectedCurrencyName: string;

  @Output()
  public onSelectCurrency: EventEmitter<string> = new EventEmitter();

  public currencies = CURRENCIES;

  public currenciesNames = Object.keys(CURRENCIES);
}
