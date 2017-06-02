import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appStoreReducer } from './reducers/app-store.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.provideStore(appStoreReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
})
export class AppStoreModule {
}
