import { Injectable } from '@angular/core';
import { Update } from './update';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private cache: Observable<Update[]>;

  constructor(private http: HttpClient) { }

  getUpdates(host_id: number): Observable<Update[]> {
    this.cache = this.http.get(`http://localhost:8000/api/updates?id=${host_id}`, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjF9.Vcp2grZ53t_OG3jwSXsRwfc_UUjboNgZarkAGiX0jgM"
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
