import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TariffListRoutingModule } from './tariff-list-routing.module';
import { TariffListComponent } from './tariff-list.component';
import { TariffItemComponent } from '../tariff-item/tariff-item.component';

@NgModule({
  imports: [
    CommonModule,
    TariffListRoutingModule
  ],
  declarations: [
    TariffListComponent,
    TariffItemComponent,
  ]
})
export class TariffListModule { }
