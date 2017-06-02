import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { NotificationProvider } from '../notification/notification';

/*
 Generated class for the ApiProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class ApiProvider {

  public constructor(private http: Http,
                     private notificationProvider: NotificationProvider) {
  }

  public getCall(url: string): Observable<any> {
    return this.processHttpResponse(this.http.get(url, this.getRequestOptions()));
  }

  public postCall(url: string, params: any): Observable<any> {
    return this.processHttpResponse(this.http.post(url, params, this.getRequestOptions()));
  }

  public putCall(url: string, params: any): Observable<any> {
    return this.processHttpResponse(this.http.put(url, params, this.getRequestOptions()));
  }

  private extractData(res: Response) {
    return res.json();
  }

  private errorHandler(err): Observable<any> {
    if (err.status === 401) {
      // this.unauthorisedStream$.next(true);
    }
    const errorObject = this.extractData(err);
    const errorMessage = errorObject[Object.keys(errorObject)[0]];
    this.notificationProvider.showErrorToast(errorMessage);

    return Observable.throw(err);
  }

  private processHttpResponse(observer: Observable<any>) {
    return observer
      .map(this.extractData)
      .share()
      .catch((err) => {
        return this.errorHandler(err);
      })
  }

  private getRequestOptions(): RequestOptions {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return new RequestOptions({
      headers,
      withCredentials: true
    });
  }
}
