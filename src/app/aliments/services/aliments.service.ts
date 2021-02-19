import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators/'
import { Observable } from 'rxjs';
import { Aliment } from '../model/aliment.model';
@Injectable({
  providedIn: 'root'
})
export class AlimentsService {

  constructor(private client: HttpClient) { }

  get(search:string): Observable<Aliment[]> {
    return this.client
      .get<Aliment[]>(environment.api.url, {
       aliment:search

      }).pipe(tap((data: Aliment[]) => {
        console.log(data);
      })
  ,)
  }
}
