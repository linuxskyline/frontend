import { Injectable } from '@angular/core';
import { Host } from './host';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map} from "rxjs/operators";

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

  constructor(private http: HttpClient) { }

  getHosts(): Observable<Object> {
    return this.http.get('http://localhost:8000/api/hosts', {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjF9.Vcp2grZ53t_OG3jwSXsRwfc_UUjboNgZarkAGiX0jgM"
      }
    });
  }

  addHost(host: Host) {
    return this.http.post("http://localhost:8000/api/hosts", host, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjF9.Vcp2grZ53t_OG3jwSXsRwfc_UUjboNgZarkAGiX0jgM"
      }
    })
  }
}
