import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddWalletPage } from './add-wallet';
import { SelectCurrencyComponentModule } from '../../components/select-currency/select-currency.module';
import { SelectIconComponentModule } from '../../components/select-icon/select-icon.module';

@NgModule({
  declarations: [
    AddWalletPage,
  ],
  imports: [
    IonicPageModule.forChild(AddWalletPage),
    SelectCurrencyComponentModule,
    SelectIconComponentModule,
  ],
  exports: [
    AddWalletPage
  ]
})
export class AddWalletPageModule {
}
