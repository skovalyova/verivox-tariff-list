import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SortDirection } from '../enums/sort-direction.enum';
import { ITariff } from '../interfaces/tariff.interface';

@Injectable({
  providedIn: 'root'
})
export class TariffApiService {
  private jsonURL = 'assets/tariffs.json';

  constructor(private http: HttpClient) { }

  public getAll(fieldName?: keyof ITariff, direction?: SortDirection): Observable<Array<ITariff>> {
    return fieldName && direction
      ? this.http.get<Array<ITariff>>(this.jsonURL)
          .pipe(
            map(items => {
              return this.sortArray<ITariff>(items, fieldName, direction)
            })
          )
      : this.http.get<Array<ITariff>>(this.jsonURL);
  }

  private sortArray<T>(array: T[], propertyName: keyof T, order: SortDirection): T[] {
    array.sort((a, b) => {
      if (a[propertyName] < b[propertyName]) {
        return -1;
      }

      if (a[propertyName] > b[propertyName]) {
          return 1;
      }

      return 0;
    });

    if (order === SortDirection.DESC) {
      array.reverse();
    }
    
    return array;
  }
}
