import { Component, Input } from '@angular/core';
import { TariffModel } from '../../models/tariff.model';

@Component({
  selector: 'app-tariff-item',
  templateUrl: './tariff-item.component.html',
  styleUrls: ['./tariff-item.component.scss']
})
export class TariffItemComponent {
  @Input()
  public tariff: TariffModel;
}
