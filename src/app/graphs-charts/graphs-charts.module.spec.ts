import { GraphsChartsModule } from './graphs-charts.module';

describe('GraphsChartsModule', () => {
  let graphsChartsModule: GraphsChartsModule;

  beforeEach(() => {
    graphsChartsModule = new GraphsChartsModule();
  });

  it('should create an instance', () => {
    expect(graphsChartsModule).toBeTruthy();
  });
});
