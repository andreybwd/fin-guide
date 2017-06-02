import { Injectable } from '@angular/core';

/*
 Generated class for the HelperProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class HelperProvider {

  constructor() {
  }

  public generateUniqueId(): string {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let text = "";

    for (let i = 0; i < 24; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
