import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPageModule } from '../pages/login/login.module';
import { CreateBudgetPageModule } from '../pages/create-budget/create-budget.module';
import { ApiProvider } from '../providers/api/api';
import { AuthProvider } from '../providers/auth/auth';
import { NotificationProvider } from '../providers/notification/notification';
import { SyncProvider } from '../providers/sync/sync';
import { BudgetProvider } from '../providers/budget/budget';
import { HelperProvider } from '../providers/helper/helper';
import { BudgetPageModule } from '../pages/budget/budget.module';
import { WalletProvider } from '../providers/wallet/wallet';
import { AppStoreModule } from '../store/store.module';
import { TransactionProvider } from '../providers/transaction/transaction';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AppStoreModule,
    LoginPageModule,
    CreateBudgetPageModule,
    BudgetPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider,
    AuthProvider,
    NotificationProvider,
    SyncProvider,
    BudgetProvider,
    HelperProvider,
    WalletProvider,
    TransactionProvider
  ]
})
export class AppModule {
}
