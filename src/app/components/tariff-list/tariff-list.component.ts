import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TariffApiService } from '../../services/tariff-api.service';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss']
})
export class TariffListComponent implements OnInit {
  private subscription: Subscription = new Subscription();

  constructor(private tariffApiService: TariffApiService) { }

  ngOnInit() {
    this.tariffApiService.getAll().subscribe(data => {
      console.log(data);
     });
  }
}
