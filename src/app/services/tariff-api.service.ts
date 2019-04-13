import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TariffModel } from '../models/tariff.model';

@Injectable({
  providedIn: 'root'
})
export class TariffApiService {
  private jsonURL = 'assets/tariffs.json';

  constructor(private http: HttpClient) { }

  public getAll(fieldName?: keyof TariffModel, direction?: "ASC" | "DESC"): Observable<Array<TariffModel>> {
    return fieldName && direction
      ? this.http.get<Array<TariffModel>>(this.jsonURL)
          .pipe(
            map(items => {
              return this.sortArray<TariffModel>(items, fieldName, direction)
            })
          )
      : this.http.get<Array<TariffModel>>(this.jsonURL);
  }

  private sortArray<T>(array: T[], propertyName: keyof T, order: "ASC" | "DESC"): T[] {
    array.sort((a, b) => {
      if (a[propertyName] < b[propertyName]) {
        return -1;
      }

      if (a[propertyName] > b[propertyName]) {
          return 1;
      }

      return 0;
    });

    if (order === 'DESC') {
      array.reverse();
    }
    
    return array;
  }
}
