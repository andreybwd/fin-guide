import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import SETTINGS from '../../app/app-settings';
import { Observable } from 'rxjs';

/*
 Generated class for the AuthProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class AuthProvider {

  public constructor(private apiProvider: ApiProvider) {
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('logged');
  }

  public login(credentials): Observable<any> {
    const login = this.apiProvider.postCall(SETTINGS.API.LOGIN, credentials);

    // TODO: make it more clear
    login.subscribe(() => {
      localStorage.setItem('logged', 'true');
    });

    return login;
  }

  public logout() {
    localStorage.removeItem('logged');
  }
}
