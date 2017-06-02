import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginCredentials = {
    username: '',
    password: ''
  };

  constructor(private navCtrl: NavController,
              private authProvider: AuthProvider) {
  }

  login() {
    this.authProvider.login(this.loginCredentials)
      .subscribe(() => {
        this.navCtrl.setRoot(HomePage);
      })
  }

}
