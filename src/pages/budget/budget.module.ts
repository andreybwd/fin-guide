import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BudgetPage } from './budget';
import { AddWalletPageModule } from '../add-wallet/add-wallet.module';
import { WalletComponentModule } from '../../components/wallet/wallet.module';
import { AddFundsPageModule } from '../add-funds/add-funds.module';
import { ObjectLoopPipe } from '../../pipes/object-loop/object-loop';
import { OrderByPipe } from '../../pipes/order-by/order-by';
import { EditWalletPageModule } from '../edit-wallet/edit-wallet.module';

@NgModule({
  declarations: [
    BudgetPage,
    ObjectLoopPipe,
    OrderByPipe,
  ],
  imports: [
    IonicPageModule.forChild(BudgetPage),
    AddWalletPageModule,
    WalletComponentModule,
    AddFundsPageModule,
    EditWalletPageModule
  ],
  exports: [
    BudgetPage
  ]
})
export class BudgetPageModule {
}
