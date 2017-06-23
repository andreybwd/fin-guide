import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditWalletPage } from './edit-wallet';
import { SelectIconComponentModule } from '../../components/select-icon/select-icon.module';

@NgModule({
  declarations: [
    EditWalletPage,
  ],
  imports: [
    IonicPageModule.forChild(EditWalletPage),
    SelectIconComponentModule
  ],
  exports: [
    EditWalletPage
  ]
})
export class EditWalletPageModule {}
