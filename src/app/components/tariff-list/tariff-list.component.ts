import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TariffApiService } from '../../services/tariff-api.service';
import { TariffModel } from 'src/app/models/tariff.model';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss']
})
export class TariffListComponent implements OnInit {
  public tariffs$: Observable<Array<TariffModel>>;
  public sortableFields: Array<any>;

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

  public sortTariffs(fieldName: keyof TariffModel, direction: "ASC" | "DESC"): void {
    this.tariffs$ = this.tariffApiService.getAll(fieldName, direction);
  }
}
