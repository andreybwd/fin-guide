import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectCurrencyComponent } from './select-currency';

@NgModule({
  declarations: [
    SelectCurrencyComponent,
  ],
  imports: [
    IonicPageModule.forChild(SelectCurrencyComponent),
  ],
  exports: [
    SelectCurrencyComponent
  ]
})
export class SelectCurrencyComponentModule {}
