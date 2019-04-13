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

  constructor(private tariffApiService: TariffApiService) { }

  ngOnInit() {
    this.tariffs$ = this.tariffApiService.getAll();
  }

  public sortTariffs(fieldName: keyof TariffModel, direction: "ASC" | "DESC") {
    this.tariffs$ = this.tariffApiService.getAll(fieldName, direction);
  }
}
