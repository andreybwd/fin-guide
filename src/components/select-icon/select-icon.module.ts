import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectIconComponent } from './select-icon';

@NgModule({
  declarations: [
    SelectIconComponent,
  ],
  imports: [
    IonicPageModule.forChild(SelectIconComponent),
  ],
  exports: [
    SelectIconComponent
  ]
})
export class SelectIconComponentModule {}
