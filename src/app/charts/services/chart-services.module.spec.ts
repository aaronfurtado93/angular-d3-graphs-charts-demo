import { ChartServicesModule } from './chart-services.module';

describe('ChartServicesModule', () => {
  let chartServicesModule: ChartServicesModule;

  beforeEach(() => {
    chartServicesModule = new ChartServicesModule();
  });

  it('should create an instance', () => {
    expect(chartServicesModule).toBeTruthy();
  });
});
