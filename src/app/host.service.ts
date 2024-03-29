import { Injectable } from '@angular/core';
import { Host } from './host';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map} from "rxjs/operators";
import { AppConfigService } from './app-config-service.service';

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

  getHost(hostID: number) {
    return this.http.get(`${this.config.apiRoot}/hosts/${hostID}`, {
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

  deleteHost(hostID: number) {
    return this.http.delete(`${this.config.apiRoot}/hosts/${hostID}`, {
      headers: {
        "Authorization": `Bearer ${this.config.token}`
      }
    })
  }
}
