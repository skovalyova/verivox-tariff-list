import { TariffListModule } from './tariff-list.module';

describe('TariffListModule', () => {
  let tariffListModule: TariffListModule;

  beforeEach(() => {
    tariffListModule = new TariffListModule();
  });

  it('should create an instance', () => {
    expect(tariffListModule).toBeTruthy();
  });
});
