import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFundsPage } from './add-funds';

@NgModule({
  declarations: [
    AddFundsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFundsPage),
  ],
  exports: [
    AddFundsPage
  ]
})
export class AddFundsPageModule {}
