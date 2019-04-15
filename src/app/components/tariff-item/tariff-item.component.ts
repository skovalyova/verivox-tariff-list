import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ITariff } from '../../interfaces/tariff.interface';

@Component({
  selector: 'app-tariff-item',
  templateUrl: './tariff-item.component.html',
  styleUrls: ['./tariff-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TariffItemComponent {
  @Input()
  public tariff: ITariff;
}
