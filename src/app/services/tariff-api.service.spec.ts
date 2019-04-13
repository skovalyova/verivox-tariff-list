import { TestBed, inject } from '@angular/core/testing';

import { TariffApiService } from './tariff-api.service';

describe('TariffApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TariffApiService]
    });
  });

  it('should be created', inject([TariffApiService], (service: TariffApiService) => {
    expect(service).toBeTruthy();
  }));
});
