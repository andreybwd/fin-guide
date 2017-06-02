import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';

/*
 Generated class for the NotificationProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class NotificationProvider {

  constructor(private toastController: ToastController) {
  }

  showToast(message: string, cssClass = 'toast-success') {
    const toast = this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      cssClass
    });

    toast.present();
  }

  showErrorToast(message: string) {
    this.showToast(message, 'toast-error');
  }

}
