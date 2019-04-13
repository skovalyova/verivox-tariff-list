import { Component, OnInit, Input } from '@angular/core';
import { TariffModel } from '../../models/tariff.model';

@Component({
  selector: 'app-tariff-item',
  templateUrl: './tariff-item.component.html',
  styleUrls: ['./tariff-item.component.scss']
})
export class TariffItemComponent implements OnInit {
  @Input()
  public tariff: TariffModel;

  constructor() { }

  ngOnInit() {
  }
}
