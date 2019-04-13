import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TariffModel } from '../models/tariff.model';

@Injectable({
  providedIn: 'root'
})
export class TariffApiService {
  private jsonURL = 'assets/tariffs.json';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<TariffModel>> {
    return this.http.get<Array<TariffModel>>(this.jsonURL);
  }
}
