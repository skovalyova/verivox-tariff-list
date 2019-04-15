import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { TariffApiService } from '../../services/tariff-api.service';
import { SortDirection } from '../../enums/sort-direction.enum';
import { IModelField } from '../../interfaces/model-field.interface';
import { ITariff } from '../../interfaces/tariff.interface';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TariffListComponent implements OnInit {
  public tariffs$: Observable<Array<ITariff>>;
  public sortableFields: Array<IModelField>;

  constructor(private tariffApiService: TariffApiService) { }

  ngOnInit() {
    this.tariffs$ = this.tariffApiService.getAll();
    this.sortableFields = [{
      fieldName: 'downloadSpeed',
      displayName: 'Download speed'
    },
    {
      fieldName: 'uploadSpeed',
      displayName: 'Upload speed'
    },
    {
      fieldName: 'price',
      displayName: 'Price'
    }];
  }

  public sortTariffs(fieldName: keyof ITariff, direction: SortDirection): void {
    this.tariffs$ = this.tariffApiService.getAll(fieldName, direction);
  }
}
