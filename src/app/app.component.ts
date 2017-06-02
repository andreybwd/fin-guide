import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { SyncProvider } from '../providers/sync/sync';
import { CreateBudgetPage } from '../pages/create-budget/create-budget';
import { Budget } from '../providers/budget/budget.interface';
import { BudgetPage } from '../pages/budget/budget';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav)
  public nav: Nav;

  public rootPage: any;

  public rootParams: any;

  public pages: Array<{ title: string, component: any }> = [
    { title: 'Home', component: HomePage },
    { title: 'List', component: ListPage }
  ];

  public constructor(private platform: Platform,
                     private statusBar: StatusBar,
                     private splashScreen: SplashScreen,
                     private authProvider: AuthProvider,
                     private syncProvider: SyncProvider) {
    this.initializeApp();
  }

  public openPage(component: Component, params?: any) {
    this.nav.setRoot(component, params);
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      if (!this.authProvider.isLoggedIn()) {
        this.openPage(LoginPage);
        this.onPlatformReady();
        return;
      }

      // TODO: improve check logic
      this.syncProvider.init()
        .subscribe((budgets: Budget[]) => {
          const budget = budgets.pop();
          if (budget && budget.id) {
            this.openPage(BudgetPage, { budgetId: budget.id });
          }
          else {
            this.openPage(CreateBudgetPage);
          }

          this.onPlatformReady();
        });
    });
  }

  private onPlatformReady() {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }
}
