import { Injectable } from '@angular/core';
import { Update } from './update';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";
import { AppConfigService } from './app-config-service.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private cache: Observable<Update[]>;

  constructor(private http: HttpClient, private config: AppConfigService) { }

  getUpdates(host_id: number): Observable<Update[]> {
    this.cache = this.http.get(`${this.config.apiRoot}/updates?id=${host_id}`, {
      headers: {
        "Authorization": `Bearer ${this.config.token}`
      }
    })
    .pipe(
      map(data => {
        return data["data"];
      }),
      map(data => {
        for (var [key, item] of data.entries()) {
          data[key] = data[key]["attributes"];
        }

        return data;
      })
    );

    return this.cache;
  }
}
