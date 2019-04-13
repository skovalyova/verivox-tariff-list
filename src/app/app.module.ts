import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { TariffListComponent } from './components/tariff-list/tariff-list.component';
import { TariffItemComponent } from './components/tariff-item/tariff-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TariffListComponent,
    TariffItemComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
