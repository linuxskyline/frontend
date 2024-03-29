import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: any;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get('/config.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
  }

  // This is an example property ... you can make it however you want.
  get apiRoot() {

    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }

    return this.appConfig.api_root;
  }

  get token() {
    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }

    return this.appConfig.token;
  }
}