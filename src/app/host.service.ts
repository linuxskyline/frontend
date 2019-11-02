import { Injectable } from '@angular/core';
import { Host } from './host';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map} from "rxjs/operators";
import { AppConfigService } from './app-config-service.service';

var HEROS = [
  {
    name: "test",
    updates: 5,
    security: 2
  },
  {
    name: "test",
    updates: 4,
    security: 2
  },
  {
    name: "test",
    updates: 5,
    security: 5
  },
  {
    name: "test",
    updates: 5,
    security: 2
  }
];

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(private http: HttpClient, private config: AppConfigService) { }

  getHosts(): Observable<Object> {
    return this.http.get(`${this.config.apiRoot}/hosts`, {
      headers: {
        "Authorization": `Bearer ${this.config.token}`
      }
    });
  }

  addHost(host: Host) {
    return this.http.post(`${this.config.apiRoot}/hosts`, host, {
      headers: {
        "Authorization": `Bearer ${this.config.token}`
      }
    })
  }
}